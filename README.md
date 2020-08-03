# [DYNW2] Inlämning 2: Filmstudion

I detta påhittade uppdrag så ska ni jobba för Sveriges Förenade Filmstudios (Länkar till en externa sida.) (SFF) och utveckla ett API som filmstudion kan anropa för att beställa film.

SFF fungerar så att lokala filmintresserade bildar föreningar som ingår i SFF som är förbundet för hela Sverige, SFF har rätt från filmbolagen att låna ut ett visst antal exemplar av olika filmer till dom lokala föreningar som sedan visar dem på exempelvis kulturbiograferna i sina städer. Förut skedde detta via blanketter och dyr transport av fysiska filmrullar - men idag sker detta såklart digitalt.

Det som inte hunnit digitaliseras är dock reglerna för hur många filmer som får lånas ut samtidigt, så SFF önskar nu att du tar fram ett API för att hålla koll på vilka filmer som finns tillgängliga för föreningarna att låna digitalt!
 

### API

API:et och klientgränsnittet ska gå att använda bara av administratörer som jobbar på SFFs huvudkontor i Stockholm, dom har kontakt med olika filmstudios genom många olika kanaler och använder sen klientgränsnittet för att uppdatera den nuvarande statusen.


#### Krav:

- Din API lösning ska vara byggt i ASP.NET (Länkar till en externa sida.) Core, version 3.0 eller 3.1.
- I API:et ska resursen filmer finnas...
  - Det ska gå att lägga till en ny film
  - Det ska gå att ändra hur många studios som kan låna filmen samtidigt
  - Det ska gå att markera att en film är utlånad till en filmstudio, man får inte låna ut den mer än filmen finns tillgänglig (max-antal utlåningar)
  - Det ska såklart även gå att ändra så att filmen inte längre är utlånad till en viss filmstudio
- En annan resurs som ska finnas är filmstudios
  - Det ska gå att registrera en ny filmstudio
  - Det ska gå att ta bort en filmstudio
  - Det ska gå att byta namn, och ort på en filmstudio
  - Via API:et ska man kunna få fram vilka filmer som studion har lånat
- När filmstudiorna har visat filmerna rapporterar dem in ett betyg och ibland även en triva på film
  - Det ska gå att skapa ett nytt trivia objekt som håller koll på en liten anekdot för en viss film (Kan vara en string, kolla på IMDB för exempel)
  - Det ska gå att ta bort inskriven trivia
  - Det ska också gå att rappotera in ett betyg mellan 1 och 5, det är viktigt att komma ihåg vilken studio som gav betyget för vilken film.
 

#### Tips:

Notera att det behöver inte gå att ta bort filmer, eller ändra deras detaljer. Det är Ok att ni skapar extra resurser och klasser än dom som minns här, men detta är minimumkraven från SFF.


### Klientgränsnittet

När SFFs administratörer arbetar idag så är det första dom tänker på vilken filmstudio det är som dom gör aktuella val för det är alltså också det viktigaste valet man gör i klientgränsnittet. Alla vidare val ska vara för den filmstudion.


#### Krav:

- Ovanstående krävda funktioner i API:et ska alla gå att använda från klientgränsnittet
- Man ska kunna välja vilken filmstudio man arbetar med, tillgängliga filmstudios ska hämtas från API:et
- Man ska kunna se en lista på alla tillgängliga filmer, där ska man se om de går att låna och om de är utlånade
- Om man vill ha mer detaljer om en film ska man kunna se en lista med trivia för den filmen, betyg och vilka filmstudios som just nu lånar filmen.
 

#### Tips:

Använd med fördel partial views eller en layout för att hålla koll på valet av filmstudio, och visuallisera det valet med en dropdown. Du kan också ha en första sida som är en "huvudmeny" med vilken filmstudio nästkommande anrop gäller. Det finns många olika strukturer som alla är lämpliga - kom ihåg att i din rapport reflektera över ditt designval! Ett tips är att ha en första sida med val av filmstudio, en sida som är en lista samt en detaljvy för information om filmen.


### Rapporten

Du ska lämna in en sedevanlig teknisk rapport över din lösning, huvudfokus är att reflektera och motivera dina designval.


#### Krav:

Rapporten ska innehålla:

- En länk till gitrepot med implementationen av REST APIet och ett tillhörande klientgränsnitt.
- En kort dokumentation över åtkomstpunkterna i API:et och vad dom retunerar för information.
- En kort reflektion över utformningen av API:et för att uppfylla kraven, och över användarbetheten hos klientgränsnittet.

Svara förslagsvis på om åtkomstpunkterna väl valda för att lösa uppgiften, samt vilket syfte och målgrupp som kliengränsnittet är utvecklat för? Tänk på att motivera dina ställningstaganden för att uppnå högre betyg på uppgiften.


### Tips på tillvägagångssätt:

Börja med att identifiera och skissa upp hur ditt nya API skall fungera. Med detta menas vilka åtkomstpunkter (endpoints) som skall finnas med samt hur logiken skall ungefär ska se ut. Vilka klasser behöver du skapa? Du behöver inte använda en databas heller i denna uppgift - Varken in-memory eller SQL, men du är välkommen att göra det om du tycker det hjälper din struktur.

Tänk på att inte skriva din rapport bara sist

Både klientgränsnittet och REST API:et ska ligga i samma GIT Repo, använd med fördel följande läng för att skapa ett nytt repo från GitHub Classroom:

Filmstudion API på GH Classroom (Länkar till en externa sida.)

**Kom ihåg:** Ditt repo måste vara privat, publika repon kommer att underkännas. Om du inte använder Classroom länken så måste du bjuda in rättande lärare (Lyret och Pickadolly) till ditt repo manuellt.

**Vad ska jag lämna in:** Du ska lämna in en skriftlig rapport i PDF format samt en teknisk implementation av din lösning via länk till ett privatgithub repo som innehåller både ett klientgränsnitt och ett REST API.

**Lycka till!**
