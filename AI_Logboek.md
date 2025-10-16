# AI Logboek Project Webtechnologie

## Vraag:

16/10/2025

ik moet voor een opdracht van school een zeer uitgebreide website maken kan je helpen met het verzinnen van een thema waarrond ik het kan baseren met andere woorden een thema om alle volgende vereisten in te verwerken? Een MongoDB database met minstens 3 gelinkte tabellen die beschikbaar is in de cloud.
• Een bestaande CSS template (w3schools, semantic-ui, …). Link vanuit je project naar de CSS
template zonder hem te downloaden binnen je project. Zorg dat de web applicatie user
interface schaalbaar is op mobile. Een doordachte keuze op vlak van CSS template kan hier
reeds bij helpen.
• Aanmaak van page templates via PUG en creatie van pagina’s op basis van parameters in web
requests en gegevens in de databank.
• Gebruik van AJAX bij het bouwen van interactieve web applicaties.
Volgende elementen moeten aanwezig zijn in de web applicatie:
• Navigatie menu bestaande uit minimum vier pagina’s.
• Minstens één html form die leidt tot het aanpassen van de database m.b.v. JavaScript.
• Minimum één embedded multimedia element.
• Integratie van minstens twee elementen third-party code/API
(facebook, twitter, youtube, google maps, …)
• Gebruik van minstens één eigen en één third-party cookie. Maak je website GDPR
compliant. Dit betekent concreet dat je tenminste één page voorziet waarbij de cookie
policy wordt toegelicht bij eerste navigatie.
• Voeg een login systeem toe met minstens 2 rollen, namelijk admin en user. De admin moet
content van een gebruiker kunnen aanpassen en verwijderen, en gebruikers kunnen
verwijderen. Daarvoor moet je een aparte admin pagina creëren die alleen wordt getoond
wanneer een persoon in de rol van admin is ingelogd

Perfect — dat is een heel concreet en realistisch schoolproject! 🎓
Laten we beginnen met een sterk thema te bedenken dat al deze vereisten mooi kan samenbrengen, zowel functioneel als creatief.

🌐 Eerste stap: Wat voor thema past bij deze vereisten?

Je hebt nodig:

Minstens 3 gelinkte MongoDB-tabellen (collecties)

Gebruikersrollen (admin & user)

Forms, media, API-integraties, cookies, AJAX, en login-systeem

We zoeken dus een thema waarbij:

Gebruikers interactie hebben met data (aanmaken, bewerken, bekijken)

Er iets is dat adminbeheer logisch maakt

Multimedia en externe API’s een natuurlijke plek hebben

💡 5 Thema-ideeën met uitgewerkte concepten
1️⃣ “TravelSpot” – Reisspot Community

Een communitysite waar gebruikers reisbestemmingen delen en reviews plaatsen.

MongoDB-tabellen:

users (rol, naam, wachtwoord, e-mail)

destinations (naam, beschrijving, foto, locatie, user_id)

reviews (rating, commentaar, user_id, destination_id)

Features:

📍 Google Maps API → toon locaties van bestemmingen

🎥 YouTube API → toon reisvlogs of promotievideo’s

🧭 Responsive CSS template zoals Semantic UI

✍️ Gebruikers kunnen bestemmingen toevoegen/bewerken

🔐 Admin kan reviews of gebruikers verwijderen

🍪 Cookie-banner + GDPR-pagina

📱 Mobile-friendly met navigatie: Home / Bestemmingen / Mijn Profiel / Contact / Admin

2️⃣ “FoodFusion” – Gerechten & Receptenplatform

Een sociaal platform waar gebruikers recepten delen en beoordelen.

MongoDB-tabellen:

users (naam, wachtwoord, rol)

recipes (titel, ingrediënten, instructies, afbeelding, user_id)

comments (inhoud, rating, recipe_id, user_id)

Features:

🍽️ YouTube API voor kookvideo’s

📍 Google Maps API om lokale restaurants te tonen

📸 Form om foto’s van gerechten te uploaden

🔐 Admin kan ongepaste content verwijderen

🍪 Cookie consent page

📲 CSS-template: Bootstrap of Semantic UI

3️⃣ “EventLink” – Evenementenplatform

Een website waar gebruikers evenementen kunnen organiseren en deelnemen.

MongoDB-tabellen:

users (naam, wachtwoord, rol)

events (titel, datum, locatie, omschrijving, afbeelding)

tickets (event_id, user_id, type)

Features:

🗺️ Google Maps API voor eventlocaties

📅 AJAX filter voor events op datum

🔗 Facebook/Twitter API voor delen van evenementen

🔐 Admin kan evenementen beheren

🍪 Cookiebeleid + GDPR page

🎧 Ingebedde Spotify of YouTube playlist per event

4️⃣ “EduConnect” – Leerplatform

Een educatieve website waar studenten cursussen kunnen volgen.

MongoDB-tabellen:

users (student/docent/admin)

courses (titel, beschrijving, docent_id)

enrollments (user_id, course_id, status)

Features:

📚 Docenten kunnen lessen uploaden (video via YouTube embed)

👨‍🏫 Admin beheert cursussen en gebruikers

🗺️ Google Maps API voor campuslocaties

🍪 Cookies voor sessies + voorkeuren

📱 CSS: W3.CSS (lichtgewicht & responsive)

5️⃣ “GreenGrow” – Duurzaam tuinieren community

Gebruikers delen planten, tips en ervaringen over duurzaam tuinieren.

MongoDB-tabellen:

users (naam, e-mail, rol)

plants (naam, foto, verzorgingstips, eigenaar_id)

posts (titel, inhoud, plant_id, user_id)

Features:

🌱 YouTube API voor plantenverzorgingsvideo’s

🗺️ Google Maps API voor lokale tuinwinkels

📸 Uploads via form

🔐 Admin kan posts beheren

🍪 Cookiebeleidpagina

💬 AJAX commentsysteem

🎯 Mijn aanbeveling

👉 Kies thema #1 “TravelSpot” (Reiscommunity)
Het combineert alle vereisten op een natuurlijke manier:

Database met logische relaties (users–destinations–reviews)

Mooie kans om externe API’s (Google Maps, YouTube) te gebruiken

Multimedia past perfect (foto’s, video’s, kaarten)

Login en adminfunctionaliteit zijn logisch (moderatie van reviews)

Aantrekkelijk voor design en presentatie

Als je wilt, kan ik:

📊 De database-relaties in MongoDB uitschrijven

📄 Een conceptarchitectuur (mappenstructuur + PUG-templates) schetsen

🧠 Helpen een stapsgewijs plan te maken (met milestones)

👉 Wil je dat ik dit verder uitwerk voor het TravelSpot-thema (de reiscommunity)?

dit was je vorige response op mijn vraag er boven kan je me helpen met het eventlink idee uit te werken?


## Antwoord:

Perfect 👌 — “**EventLink**” is een **sterk, realistisch en veelzijdig thema** voor jouw project.
Het leent zich uitstekend voor alle technische vereisten (MongoDB, PUG, AJAX, login-systeem, API’s, cookies, enz.).

Laten we het **EventLink-concept stap voor stap volledig uitwerken**, zodat je meteen aan je implementatie kunt beginnen.

---

## 🎯 1. Concept & Doel van “EventLink”

**EventLink** is een webplatform waar gebruikers evenementen kunnen:

* ontdekken,
* aanmaken,
* en deelnemen aan events (zoals concerten, workshops, sportactiviteiten…).

**Admin-gebruikers** beheren evenementen en gebruikers (moderatie).
**Gewone gebruikers** kunnen hun eigen evenementen aanmaken, bewerken en tickets boeken.

---

## 🧩 2. Databankontwerp (MongoDB)

We gebruiken **minstens drie gelinkte collecties**.
Hier is een uitgewerkt schema:

### 🧱 Collection 1: `users`

```json
{
  "_id": ObjectId(),
  "username": "janedoe",
  "email": "jane@example.com",
  "passwordHash": "...",
  "role": "user", // of "admin"
  "createdAt": ISODate("2025-10-16T12:00:00Z")
}
```

### 🧱 Collection 2: `events`

```json
{
  "_id": ObjectId(),
  "title": "Summer Music Festival",
  "description": "Een weekend vol muziek en sfeer",
  "date": "2025-08-14",
  "location": {
    "name": "Antwerpen, België",
    "lat": 51.2194,
    "lng": 4.4025
  },
  "imageUrl": "/uploads/festival.jpg",
  "organizer_id": ObjectId("..."), // verwijst naar users._id
  "createdAt": ISODate("2025-10-16T12:00:00Z")
}
```

### 🧱 Collection 3: `tickets`

```json
{
  "_id": ObjectId(),
  "event_id": ObjectId("..."), // verwijst naar events._id
  "user_id": ObjectId("..."), // verwijst naar users._id
  "type": "VIP" | "Standard",
  "purchaseDate": ISODate("2025-10-16T12:00:00Z")
}
```

💡 Extra idee (optioneel): voeg een `comments`-collectie toe voor AJAX-interacties.

---

## 🧱 3. Functionaliteitenoverzicht

| Functie                                     | Voor wie     | Technologie                                          |
| ------------------------------------------- | ------------ | ---------------------------------------------------- |
| Registreren / Inloggen                      | User & Admin | MongoDB + bcrypt + sessions/cookies                  |
| Evenement aanmaken / bewerken / verwijderen | User & Admin | Form + AJAX + DB-update                              |
| Gebruikers beheren                          | Admin        | Admin dashboard                                      |
| Tickets kopen                               | User         | Form + AJAX                                          |
| Google Maps locatie tonen                   | Iedereen     | Google Maps Embed API                                |
| Social sharing (Twitter/Facebook)           | Iedereen     | Third-party API links                                |
| Responsive UI                               | Iedereen     | CSS framework (bv. **Semantic UI** of **Bootstrap**) |
| Cookie consent & GDPR                       | Iedereen     | Eigen cookie + third-party cookie                    |
| Multimedia (video of muziek)                | Iedereen     | YouTube-embed of Spotify-embed                       |

---

## 🧱 4. Pagina’s (minstens 4 + admin)

| Pagina                 | Functie                       | Inhoud / Features                             |
| ---------------------- | ----------------------------- | --------------------------------------------- |
| **Home**               | Intro & overzicht evenementen | Lijst van komende events + filters via AJAX   |
| **Event detail**       | Bekijken van één event        | Foto, beschrijving, Google Map, YouTube-video |
| **Mijn Events**        | Beheer door gebruiker         | CRUD voor eigen events                        |
| **Contact / Over ons** | Statische pagina              | Informatie + embedded video of social media   |
| **Login / Register**   | Authenticatie                 | Forms + cookie                                |
| **Admin Dashboard**    | Enkel voor admin              | Gebruikers- en eventbeheer                    |

---

## 🧱 5. Externe API’s

✅ **Google Maps API**

* Toont locatie van events met markers.
* Bijvoorbeeld:

  ```html
  <iframe
    width="100%"
    height="300"
    style="border:0"
    loading="lazy"
    allowfullscreen
    src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Antwerpen,Belgium">
  </iframe>
  ```

✅ **YouTube API / Embed**

* Voor promotievideo’s van evenementen.

  ```html
  <iframe width="560" height="315"
    src="https://www.youtube.com/embed/VIDEO_ID"
    frameborder="0" allowfullscreen></iframe>
  ```

(Je kunt ook een Twitter “share this event” knop integreren.)

---

## 🧱 6. Cookies en GDPR

* **Eigen cookie:** voor sessies of voorkeuren (bijv. donkere modus of taalvoorkeur).
* **Third-party cookie:** Google Maps of YouTube plaatst automatisch third-party cookies.
* **Cookie consent banner:** tonen bij eerste bezoek.
* **GDPR-pagina:** uitleg over cookies, gegevensverwerking en opt-out mogelijkheid.

---

## 🧱 7. CSS Template

Gebruik een bestaande responsive CSS library:

* **Optie 1:** [Semantic UI](https://semantic-ui.com/)

  ```html
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.2/semantic.min.css">
  ```
* **Optie 2:** [Bootstrap 5](https://getbootstrap.com/)

  ```html
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  ```

Beide zijn mobile-first, dus dat helpt met de schaalbaarheid.

---

## 🧱 8. PUG Templates Structuur

**/views/**

```
layout.pug
index.pug
event-detail.pug
my-events.pug
login.pug
admin-dashboard.pug
cookie-policy.pug
```

**layout.pug (voorbeeld):**

```pug
doctype html
html
  head
    title EventLink
    link(rel="stylesheet", href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.2/semantic.min.css")
  body
    include ./partials/navbar.pug
    block content
    include ./partials/footer.pug
```

**index.pug (voorbeeld):**

```pug
extends layout

block content
  .ui.container
    h2.ui.header Upcoming Events
    each event in events
      .ui.card
        img(src=event.imageUrl)
        .content
          a.header(href=`/event/${event._id}`)= event.title
          .meta #{event.date}
```

---

## 🧱 9. AJAX Functionaliteiten

* Live zoeken/filteren van evenementen (zonder herladen)
* Event toevoegen zonder page reload
* Tickets kopen via AJAX
* Commentaar toevoegen (optioneel)

Voorbeeld:

```js
$('#filterForm').on('change', function() {
  $.ajax({
    url: '/events/filter',
    method: 'GET',
    data: $(this).serialize(),
    success: function(data) {
      $('#eventList').html(data);
    }
  });
});
```

---

## 🧱 10. Login-systeem & Rollen

* Login met bcrypt password hash
* Express-session of JWT cookies
* Middleware om routes te beschermen:

```js
function isAdmin(req, res, next) {
  if (req.session.user && req.session.user.role === 'admin') {
    return next();
  }
  res.redirect('/login');
}
```

Admin kan:

* Gebruikers verwijderen
* Evenementen aanpassen of verwijderen
* Gebruikersgegevens bekijken

---

## 📈 11. Mappenstructuur (aanbevolen)

```
/eventlink/
│
├── /public/            # CSS, JS, afbeeldingen
├── /routes/            # Express-routes
├── /views/             # PUG templates
├── /models/            # Mongoose schema’s
├── /controllers/       # Business logic
├── /config/            # MongoDB connectie, keys, enz.
└── server.js           # Express-app entry point
```

---

## 🧠 12. Volgende stap

Ik kan voor jou een **volledig technisch plan** uitschrijven met:

* database-relaties in Mongoose-code,
* een startende `server.js` setup (Express + MongoDB),
* en een voorbeeld van een PUG-template + route met AJAX.

👉 Wil je dat ik dat doe?
En zo ja — wil je dat ik het schrijf in **JavaScript (Node.js + Express)** of **TypeScript**?

## Vraag:

kan je andere ideeen geven voor de databank tabellen? heb gelijk het gevoel dat dat niet echt een goede manier is om een databank te ontwerpen

## Antwoord:
💯 Heel goed dat je dat opmerkt — dat laat zien dat je **kritisch nadenkt over datamodelontwerp**, wat superbelangrijk is bij webontwikkeling.
De vorige opzet (users, events, tickets) was functioneel en voldoende om te voldoen aan de schoolvereisten, maar hij kan **conceptueel beter en realistischer worden uitgewerkt** — vooral qua **normalisatie**, **relaties** en **toekomstige uitbreidbaarheid**.

Laten we samen nadenken over **betere alternatieven** voor jouw *EventLink*-project, afhankelijk van welk soort datarelaties je logisch vindt.

---

## 🧩 Eerst: wat maakt een goede MongoDB-structuur?

Omdat MongoDB **niet-relationeel** is (document-gebaseerd), moet je balans zoeken tussen:

* **Normalisatie** (scheiding van data, minder duplicatie)
* **Denormalisatie** (data opslaan in 1 document voor performance)

> 🔹 Vuistregel: embed als de relatie *één-op-weinig* is.
> 🔹 Reference als de relatie *één-op-veel of veel-op-veel* is.

---

## 💡 Alternatief 1: Realistischer event-platform met gebruikersinteractie

### Collectie: `users`

```json
{
  "_id": ObjectId(),
  "username": "jane_doe",
  "email": "jane@example.com",
  "passwordHash": "...",
  "role": "user", // of "admin"
  "joinedAt": ISODate("2025-10-16T10:00:00Z"),
  "preferences": {
    "theme": "dark",
    "language": "nl"
  }
}
```

---

### Collectie: `events`

```json
{
  "_id": ObjectId(),
  "title": "Tech Meetup 2025",
  "description": "Netwerkevenement over AI en data",
  "category": "Technology",
  "date": "2025-11-22",
  "location": {
    "city": "Gent",
    "venue": "T2 Campus",
    "coordinates": { "lat": 51.05, "lng": 3.72 }
  },
  "organizer_id": ObjectId("user123"),
  "tags": ["AI", "Networking", "Startup"],
  "maxParticipants": 200,
  "price": 15,
  "media": {
    "imageUrl": "/uploads/techmeetup.jpg",
    "videoUrl": "https://youtube.com/embed/abc123"
  },
  "stats": {
    "views": 245,
    "registrations": 60
  },
  "createdAt": ISODate("2025-10-10T09:00:00Z")
}
```

---

### Collectie: `registrations`

(≠ tickets — meer algemeen en flexibeler)

```json
{
  "_id": ObjectId(),
  "user_id": ObjectId("..."),
  "event_id": ObjectId("..."),
  "status": "confirmed", // pending, cancelled, etc.
  "registeredAt": ISODate("2025-10-16T12:00:00Z"),
  "ticketType": "standard" // of VIP
}
```

---

### Collectie: `comments` (optioneel, maar interessant voor AJAX)

```json
{
  "_id": ObjectId(),
  "event_id": ObjectId("..."),
  "user_id": ObjectId("..."),
  "text": "Heel interessant event!",
  "rating": 5,
  "postedAt": ISODate("2025-10-17T08:00:00Z")
}
```

➡️ Dit geeft je **meer uitbreidbaarheid**:

* Statistieken per event.
* Filters (categorie, stad, tags).
* AJAX-updates (comments, views, likes).
* Complexe queries (bijv. alle events van gebruiker X met >50 deelnemers).

---

## 💡 Alternatief 2: Eventplatform met organisaties & meerdere organisatoren

Misschien wil je iets meer “professioneel eventbeheer”.

### Collectie: `organizations`

```json
{
  "_id": ObjectId(),
  "name": "EventMasters BV",
  "description": "Organisatie gespecialiseerd in muziekfestivals",
  "website": "https://eventmasters.be",
  "contactEmail": "info@eventmasters.be",
  "owner_id": ObjectId("user123")
}
```

### Collectie: `users`

(gebruikers kunnen lid zijn van organisaties)

```json
{
  "_id": ObjectId(),
  "username": "john_doe",
  "email": "john@example.com",
  "role": "admin",
  "organization_id": ObjectId("org123")
}
```

### Collectie: `events`

```json
{
  "_id": ObjectId(),
  "title": "Antwerp Dance Fest",
  "organization_id": ObjectId("org123"),
  "category": "Music",
  "date": "2025-07-15",
  "venue": "Antwerpen Expo",
  "ticketOptions": [
    { "type": "Standard", "price": 25 },
    { "type": "VIP", "price": 80 }
  ],
  "image": "/uploads/adf.jpg",
  "isPublic": true
}
```

### Collectie: `registrations`

→ Verwijzingen naar events en users (zoals eerder)

---

## 💡 Alternatief 3: “Community-driven” platform (met sociale features)

Als je meer AJAX-interactie wilt (reviews, likes, profielen), kun je het sociaal maken:

* `users`
* `events`
* `registrations`
* `comments`
* `likes`
* (optioneel) `messages` of `notifications`

👉 Zo kun je dynamisch content updaten (zonder page reload).

---

## 🧠 Samenvatting van mogelijke databasemodellen

| Modeltype                                                      | Sterke punten                 | Wanneer gebruiken                         |
| -------------------------------------------------------------- | ----------------------------- | ----------------------------------------- |
| **Basis (users, events, tickets)**                             | Simpel, voldoet aan eisen     | Voor snelle start of demo                 |
| **Verbeterd (users, events, registrations, comments)**         | Meer realistisch & schaalbaar | Als je AJAX + interactie wilt             |
| **Organisaties (organizations, events, users, registrations)** | Professioneel model           | Als je admin-systeem per organisatie wilt |
| **Community (users, events, comments, likes)**                 | Veel user-interactie          | Als je focus op sociale functies ligt     |

---

## 🔧 Mijn advies

Voor jouw schoolopdracht (met de vereisten zoals admin/user rollen, AJAX, PUG, cookies, API’s, enz.) zou ik aanraden:

👉 **Gebruik het “Verbeterd model”**:

* `users`
* `events`
* `registrations`
* `comments` (extra bonus voor AJAX)

Dat is **complex genoeg** om indruk te maken, maar nog **beheersbaar** in code en documentatie.

---

Als je wilt, kan ik dit model uitschrijven in **Mongoose-schema’s (Node.js)**, met duidelijke **relaties en referenties**, zodat je meteen weet hoe je de database aanmaakt en koppelt aan je Express-routes.

Wil je dat ik dat doe?

## vraag:

hoe kan een gebruiker dan deelnemen aan meerder events met dit ontwerp?

## antwoord:

Fantastische vraag. 🧠
Je raakt hier precies de kern van **relationeel ontwerp in een documentdatabase zoals MongoDB** — en dit is iets waar veel studenten (en zelfs ontwikkelaars) in het begin over struikelen.

Laten we dit stap voor stap helder maken. 👇

---

## 🎯 De vraag

> “Hoe kan één gebruiker deelnemen aan meerdere events in het verbeterde EventLink-model?”

Kort antwoord:
👉 **Via de `registrations`-collectie**, die fungeert als **tussenliggende (link) tabel** tussen `users` en `events`.

---

## 🧩 1. Waarom we een aparte `registrations`-collectie hebben

De relatie tussen **users** en **events** is **veel-op-veel**:

* Eén gebruiker kan zich inschrijven voor **meerdere events**.
* Eén event kan meerdere gebruikers hebben die deelnemen.

In een relationele SQL-database zou je hiervoor een **koppel- of join-tabel** gebruiken.
In MongoDB doen we dat met een **aparte collectie** (hier: `registrations`).

---

## 🧱 2. Hoe dit werkt in praktijk

### 🗂️ users

```json
{
  "_id": ObjectId("u123"),
  "username": "jane_doe",
  "email": "jane@example.com",
  "role": "user"
}
```

### 🗂️ events

```json
{
  "_id": ObjectId("e456"),
  "title": "Tech Meetup 2025",
  "date": "2025-11-22",
  "location": "Gent"
}
```

### 🗂️ registrations

```json
[
  {
    "_id": ObjectId("r001"),
    "user_id": ObjectId("u123"),
    "event_id": ObjectId("e456"),
    "ticketType": "VIP",
    "status": "confirmed"
  },
  {
    "_id": ObjectId("r002"),
    "user_id": ObjectId("u123"),
    "event_id": ObjectId("e789"), // Ander event
    "ticketType": "Standard",
    "status": "confirmed"
  }
]
```

💡 Met deze structuur kan:

* De gebruiker `u123` deelnemen aan **zoveel events als er registrations bestaan**.
* Elk event meerdere gebruikers hebben die eraan gekoppeld zijn via `registrations`.

---

## 🔁 3. Hoe je dit opvraagt in code (Mongoose)

### a) Alle events waaraan een gebruiker deelneemt

```js
const registrations = await Registration.find({ user_id: userId }).populate('event_id');
const myEvents = registrations.map(r => r.event_id);
```

### b) Alle deelnemers aan één event

```js
const attendees = await Registration.find({ event_id: eventId }).populate('user_id');
```

Zo gebruik je `populate()` om de referenties te “joinen” (vergelijkbaar met een JOIN in SQL).

---

## 🧩 4. Alternatief: events embedden in users (of omgekeerd)

Soms embed je een array in MongoDB om duplicatie te vermijden, maar dit is **alleen slim bij kleine hoeveelheden data**.

Bijvoorbeeld:

```json
{
  "_id": ObjectId("u123"),
  "username": "jane_doe",
  "events": [
    { "event_id": ObjectId("e456"), "status": "confirmed" },
    { "event_id": ObjectId("e789"), "status": "cancelled" }
  ]
}
```

Maar dit is **niet ideaal** als:

* gebruikers zich inschrijven op veel events,
* of events duizenden deelnemers hebben.

Dan wordt het document te groot en moeilijk te beheren.
Daarom is de **`registrations`-collectie** de juiste keuze.

---

## 🔐 5. Voordeel voor jouw project

✅ Helder schema — logisch te begrijpen en te beheren.
✅ Perfect voor de **“database met gelinkte tabellen”**-vereiste van je opdracht.
✅ Laat je **AJAX-functies** makkelijk bouwen (events opvragen, registreren zonder reload).
✅ Ideaal voor **adminbeheer** (wie is ingeschreven waar).

---

## 🧠 Samenvatting

| Concept                    | Relatie                                        | Implementatie                 |
| -------------------------- | ---------------------------------------------- | ----------------------------- |
| User ↔ Event               | Veel-op-veel                                   | Via `registrations`-collectie |
| Eén user → meerdere events | Meerdere `registrations` met zelfde `user_id`  |                               |
| Eén event → meerdere users | Meerdere `registrations` met zelfde `event_id` |                               |

---

💬 **Kort gezegd:**
De gebruiker neemt deel aan meerdere events **via meerdere registratie-documenten** in de `registrations`-collectie.
Dat is exact hoe je in MongoDB een “join table” simuleert.

---

Wil je dat ik dit meteen uitschrijf als **Mongoose-schema’s** (met referenties en populates) zodat je het in Node.js kan gebruiken? Dat zou je implementatie superduidelijk maken.
