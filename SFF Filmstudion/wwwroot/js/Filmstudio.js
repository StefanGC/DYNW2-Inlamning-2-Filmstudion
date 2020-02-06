const uriFilm = 'http://localhost:5001/api/Films';
const uriFilmstudio = 'http://localhost:5001/api/Filmstudios';
const uriLoan = 'http://localhost:5001/api/Loans';
let todos = [];
let ids = [];


function getItems() {
    fetch(uriFilmstudio)
        .then(response => response.json())
        .then(data => _displayItems(data))
        .catch(error => console.error('Unable to get items.', error));
}

//TODO
function addItem() {
    const addNameTextbox = document.getElementById('add-name');

    const item = {
        name: addNameTextbox.value.trim(),
        city: "Helsingborg",
        films: "Inga filmer"
    };

    fetch(uriFilmstudio, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
        .then(response => response.json())
        .then(() => {
            getItems();
            addNameTextbox.value = '';
        })
        .catch(error => console.error('Unable to add item.', error));
}

function deleteItem(id) {
    fetch(`${uriFilmstudio}/${id}`, {
        method: 'DELETE'
    })
        .then(() => getItems())
        .catch(error => console.error('Unable to delete item.', error));
}

//TODO
function displayEditForm(id) {
    const item = todos.find(item => item.id === id);

    document.getElementById('edit-name').value = item.name;
    document.getElementById('edit-id').value = item.id;
    document.getElementById('edit-city').value = item.city;
    document.getElementById('editForm').style.display = 'block';

    fetch("http://localhost:5001/api/Films")
        .then(response => response.json())
        .then(function (jsonResult) {
            let idSelect = "<option value=\"0\" disabled>Välj en film</option>"
            for (let i = 0; i < jsonResult.length; i++) {
                idSelect += "<option value=\"" + jsonResult[i].name + "\">" + jsonResult[i].name + "</option>";
            }
            document.getElementById('edit-films').innerHTML = idSelect;
        })
        .catch(err => console.log(JSON.stringify(err))); 
}

//TODO
function updateItem() {
    const itemId = document.getElementById('edit-id').value;
    const item = {
        id: parseInt(itemId, 10),
        name: document.getElementById('edit-name').value.trim(),
        city: document.getElementById('edit-city').value.trim(),
        films: document.getElementById('edit-films').value.trim()
    };

    const item2 = {
        FilmId: 1,
        FilmStudioId: parseInt(itemId, 10)
    }

    fetch(`${uriFilmstudio}/${itemId}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
        .then(() => getItems())
        .catch(error => console.error('Unable to update item.', error));

    //Use to Loans
    fetch(uriLoan, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item2)
    })
        .then(response => response.json())
        .then(() => {
            getItems();
            addNameTextbox.value = '';
        })
        .catch(error => console.error('Unable to add item.', error));

    closeInput();

    return false;
}

function closeInput() {
    document.getElementById('editForm').style.display = 'none';
}

function _displayCount(itemCount) {
    const name = (itemCount === 1) ? 'to-do' : 'to-dos';

    document.getElementById('counter').innerText = `${itemCount} ${name}`;
}

function _displayItems(data) {
    let tBody = document.getElementById('todos');
    tBody.innerHTML = '';

    //_displayCount(data.length);

    const button = document.createElement('button');

    data.forEach(item => {
        ids.push(item.id);
        let editButton = button.cloneNode(false);
        editButton.innerText = 'Redigera';
        editButton.setAttribute('onclick', `displayEditForm(${item.id})`);

        let deleteButton = button.cloneNode(false);
        deleteButton.innerText = 'Ta bort';
        deleteButton.setAttribute('onclick', `deleteItem(${item.id})`);

        let tr = tBody.insertRow();

        let td1 = tr.insertCell(0);
        let textNode1 = document.createTextNode((item.id).toString());
        td1.appendChild(textNode1);

        let td2 = tr.insertCell(1);
        let textNode = document.createTextNode(item.name);
        td2.appendChild(textNode);

        let td3 = tr.insertCell(2);
        let textNode3 = document.createTextNode(item.city);
        td3.appendChild(textNode3);

        let td4 = tr.insertCell(3);
        let textNode4 = document.createTextNode(item.films);
        td4.appendChild(textNode4);
            
        let td5 = tr.insertCell(4);
        td5.appendChild(editButton);

        let td6 = tr.insertCell(5);
        td6.appendChild(deleteButton);
    });

    todos = data;
    //getFilms();
}

function getFilms() {
    let myFilms = "";
    fetch(uriLoan)
        .then(response => response.json())
        .then(function (jsonResult) {
            for (let i = 0; i < jsonResult.length; i++) {
                if (jsonResult[i].filmStudioId == ids[0])
                    if (myFilms == "")
                        myFilms = getFilmName(1);
                    else
                        myFilms += ", " + jsonResult[i].name;
            }
        })
        .catch(error => console.error('Unable to add item.', error));
}

function getFilmName(filmId) {
    fetch(`${uriFilm}/${filmId}`)
        .then(response => response.json())
        .then(function (jsonResult) {
            return jsonResult.name;
        })
        .catch(error => console.error('Unable to get items.', error));
}