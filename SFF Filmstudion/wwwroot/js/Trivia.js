﻿const uriTrivia = 'http://localhost:5001/api/Trivias';
let todos = [];

function getItems() {
    fetch(uriTrivia)
        .then(response => response.json())
        .then(data => _displayItems(data))
        .catch(error => console.error('Unable to get items.', error));
}

//TODO
function addItem() {
    const addNameTextbox = document.getElementById('add-name');

    const item = {
        comment: addNameTextbox.value.trim(),
        filmstudioId: 0,
        filmId: 0
    };

    fetch(uriTrivia, {
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
    fetch(`${uriTrivia}/${id}`, {
        method: 'DELETE'
    })
        .then(() => getItems())
        .catch(error => console.error('Unable to delete item.', error));
}

//TODO
function displayEditForm(id) {
    const item = todos.find(item => item.id === id);

    document.getElementById('edit-id').value = item.id;
    document.getElementById('edit-comment').value = item.comment;
    document.getElementById('edit-filmstudioId').value = item.filmstudioId;
    document.getElementById('edit-filmId').value = item.FilmId;
    document.getElementById('editForm').style.display = 'block';
}

//TODO
function updateItem() {
    const itemId = document.getElementById('edit-id').value;
    const item = {
        id: parseInt(itemId, 10),
        comment: document.getElementById('edit-comment').value.trim(),
        filmstudioId: parseInt(document.getElementById('edit-filmstudioId').value.trim()),
        filmId: parseInt(document.getElementById('edit-filmId').value.trim())
    };

    fetch(`${uriTrivia}/${itemId}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
        .then(() => getItems())
        .catch(error => console.error('Unable to update item.', error));

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
    const tBody = document.getElementById('todos');
    tBody.innerHTML = '';

    //_displayCount(data.length);

    const button = document.createElement('button');

    data.forEach(item => {
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
        let textNode = document.createTextNode(item.comment);
        td2.appendChild(textNode);

        let td3 = tr.insertCell(2);
        let textNode3 = document.createTextNode(item.filmstudioId);
        td3.appendChild(textNode3);

        let td4 = tr.insertCell(3);
        let textNode4 = document.createTextNode(item.filmId);
        td4.appendChild(textNode4);

        let td5 = tr.insertCell(4);
        td5.appendChild(editButton);

        let td6 = tr.insertCell(5);
        td6.appendChild(deleteButton);
    });

    todos = data;
}