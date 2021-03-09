# Uppstart av projektet:
Vi skapade ett nytt Vue projekt som vi cloneat från Anna, sedan lagt till project contributors.

Vi har testat att alla kan commita till projektet och att allt funkar som det ska.

Vår grupp har sedan haft team samtal där vi delat skärm och visat våra figma projekt för Sinus Webshop för att komma överens om vilken design vi ska följa. Vi har kommit fram till att göra Annas wepshop då vi alla ansåg att den var luftig, profesionell och hade bra funktioner och layout.

Vi har gått igenom projektkraven och diskuterat våra mål.

Varje gruppmedlem har valt ut en del att börja med, och tagit sig an fler uppgiter under projektets gång.

# Fördelning av uppgifter och arbetsmetoder:
För att alla ska få testa på att vara Scrum-master har vi kommit fram till att varje gruppmedlem ska få ta rollen i två dagar.
Vi har korta avstämningsmöten varje dag där vi går igenom kort vad vi håller på med, om det finns några svårigheter och om vi behöver hjälp. Då vi har olika tider så stämmer vi av dagen innan vilken tid mötet kommande dag ska ske. Vi är överens om att det är OK för en gruppmedlem att hoppa in och göra ändringar/hjälpa till i nångons del om det behövs och så länge som det är ok för båda parter.  Vi diskuterar i grupp om man haft enskilt samtal med lärare, där vi går igenom vad som sagts och gjorts. Vi jobbar enskilt och har parkodat vid behov. Vi har haft daglig kontakt utöver mötena där vi kunnat stötta varann i våra frunderingar och problem. 

För att planera arbetet och ha en bra överblick i vad som bör göras, vad som är påbörjat och vad som är klart så pratade vi om vi skulle använda oss utav Trello eller GitHub. Vi valde att använda GitHub då vi ansåg att det var smidigare att använda så få program som möjligt, och försöka hålla det mesta via samma platform. 
Vi kom även fram till att Kanban var ett bra system för att få en bra överblick i projektets gång, vad som måste göras och vad som är klart. 

Kanban ska bestå av userstories/uppgifter som varje gruppmedlem kan välja att utföra, samt uppdatera dess status genom att sätta den i rätt kolumn; Att göra, pågående, klar.

Koden ska hållas  enhetlig och snygg genom att vi gör regelbundern code reviewing.


# SINUS Webshop

## Arbetssätt
Samla era erfarenheter från Kanban, Scrum och diskussionerna av Modern Agile och kom överens i 
gruppen om vilka delar och hur ni ska inkorporera detta i ert arbete. 
Dokumentera vad ni kommer överens om i README.md i ert repository.

## Instruktioner
Ni ska bygga en FrontEnd till en färdig BackEnd. Se `SINUS Webshop - REST API` nedan för mer information.

Inom gruppen har ni en uppsättning mockups från UI-kursen i höstas, välj en av dessa mockups att utgå ifrån.
Om ni inte kommer överens om vilken ni ska använda så får ni be läraren om en annan.

Skapa en trello board och bjud alla i gruppen, inkl läraren.

## SINUS Webshop

SINUS Webshop är en onlinebutik som säljer skateboards och tillbehör.

Webshoppen ska ha 3 olika lägen
* Anonym besökare
* Inloggad Kund
* Inloggad Admin (VG-krav)

### Anonym besökare
Det ska finnas en `registrerings`-view med ett registreringsformulär.
En order kan genomföras som anonym användare.

### Inloggad Kund
Det ska finnas en `My Account`-view med information om ditt konto och din orderhistorik.

### Inloggad Admin (VG-krav)
Det ska finnas en `Admin Area`-view med ett CRUD-gränssnitt för alla produkter.

### Övriga Views och Features
* En view för produktlista
* En view utcheckning med formulär för kontaktinfo och betalinfo, fylls i automagiskt om man är inloggad
* modal för enstaka produkt
* Modal för kundkorg
* Modal för inloggningsformulär

# SINUS Webshop - REST API

## Getting Started

1. `cd backend`
2. Install dependencies `npm install`
3. Start the server `npm run start`

## EndPoint Specifikation

| Resurs | Metod | Detaljer | Request Body |
| ------ | ------ | ------ | ------ |
| /api/auth/ | POST | Authentiserar user med email & password. Returnerar en JWT-token som används vid varje anrop API:et i en Authorization-header. | {"email": "...", "password" : "..."} |
| /api/register/ | POST | Registrerar en användare. | Se User-modellen |
| /api/products/ | GET | Returnerar en lista på samtliga produkter. | ❌ | 
| /api/products/:id | GET | Returnerar en enstaka produkt. | ❌ |
| /api/products/ | POST | Skapar en ny produkt. Enbart tillgänglig för admins | Se Product-modellen |
| /api/products/:id | PATCH | Uppdaterar produkt. Enbart tillgänglig för admins | Se Product-modellen |
| /api/products/:id | DELETE | Tar bort en produkt med :id. Enbart tillgänglig för admins | ❌ |
| /api/orders | GET | Returnerar en lista på den användarens ordrar eller samtliga ordrar för admins. | ❌ |
| /api/orders | POST | Skapar en ny order | Se Order-modellen |
| /api/me | GET | Hämtar den inloggade användren | ❌ |
| /api/me | PATCH | Uppdaterar profilen för den inloggade användren | Se User-modellen |

### Datamodeller

#### Product

##### Request Body
```javascript
 {
  "title": 'Gretas Fury',
  "price": 999,
  "shortDesc": 'Unisex',
  "longDesc": 'Skate ipsum dolor sit amet...',
  "imgFile": 'skateboard-greta.png'
} 
```

##### Document Model
```javascript
 {
  _id: '39y7gbbZk1u4ABnv', // generated serverside
  title: 'Gretas Fury',
  price: 999,
  shortDesc: 'Unisex',
  longDesc: 'Skate ipsum dolor sit amet...',
  imgFile: 'skateboard-greta.png' // Asset logic on clientside
} 
```

#### Order
##### Request Body
```js
{
  "items": ["productId1", "productId1", "productId2"]
}
```

##### Document Model
```javascript
 {
  _id: 123,
  timeStamp: Date.now(), 
  status: 'inProcess',
  items: [ 
    {
      title: "Tricky",
      price: 799,
      imgFile: "skateboard-generic.png",
      _id: "9E6KXMIdRglW0wbL",
      amount: 2
    }, 
    {
      <etc>
    }, 
    ... 
  ],
  orderValue: 999
} 
```

#### User

##### Request Body
```js
{
  "email": 'greta.thunberg@example.se',
  "password": 'grillkorv123',
  "name": 'Johan Kivi',

  "address": {
    "street": 'Tokitokvägen 3',
    "zip": '123 45',
    "city": 'Tokberga'
  }
} 
```

##### Document Model

```javascript
{
  _id: '6b521d3f-3d15...' // generated server side
  email: 'johan.kivi@zocom.se',
  password: '$$$hashed password$$$', // hashed serverside
  name: 'Johan Kivi',
  role: 'admin', // or customer
  address: {
    street: 'Tokitokvägen 3',
      zip: '123 45',
      city: 'Tokberga'
  },
  orderHistory: [ <orderId1>, <orderId2>, ... ]
} 
```

## Bedömningskritierer

### Godkänt

* State management i Vuex
* Vue Router för navigation
* Demonstrera komponenter, props, emits, data, computed, events
* API-abstraktion till egen modul
* Tydlig feature breakdown i Trello
* Dokumenterat agilt arbetssätt i README
* Inlämnad utvärdering i slutet


### Väl godkänt
* {...godkänt}
* Admin-view för CRUD av produkter
