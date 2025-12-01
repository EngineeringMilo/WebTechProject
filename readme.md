# 🎉 **EventLink**

**Your gateway to creating, managing, and exploring events — built with Node.js, Express, and MongoDB.**
Developed for coursework at **KU Leuven**.

---

## ✨ **What is EventLink?**

EventLink is a lightweight event-management web app where users can view, create, and interact with events.
It features secure authentication, clean Pug templates, and smooth session handling — all powered by modern Node.js tools.

---

## 🚀 **Tech Stack & Dependencies**

EventLink relies on a set of powerful tools:

### 📚 **Core Dependencies**

| Dependency                | What it Does                                   |
| ------------------------- | ---------------------------------------------- |
| **express**               | Web server framework — the backbone of the app |
| **mongoose**              | MongoDB data modeling made simple              |
| **pug**                   | Fast and elegant HTML templating               |
| **bcrypt**                | Secure password hashing 🔐                     |
| **connect-mongo**         | Stores sessions inside MongoDB                 |
| **express-session**       | Keeps users logged in                          |
| **cookie-parser**         | Reads cookies (very useful!)                   |
| **dotenv**                | Loads environment variables                    |
| **method-override**       | Allows PUT/DELETE forms                        |
| **vanilla-cookieconsent** | GDPR-friendly cookie banner 🇪🇺               |

### 📥 Install all dependencies:

```bash
npm install express express-session connect-mongo mongoose bcrypt cookie-parser dotenv method-override pug vanilla-cookieconsent
```

---

## 🛠️ **Development Tools**

During development, the project uses **nodemon** for live-reloading:

```bash
npm install nodemon --save-dev
```

Nodemon automatically restarts the server whenever you change a file — a lifesaver during coding sessions.

---

## ▶️ **How to Run the App**

Two ways to launch EventLink:

### **1️⃣ Standard Run (no nodemon)**

```bash
node app.js
```

### **2️⃣ Developer Mode (with nodemon)**

The `package.json` includes this script:

```json
"scripts": {
    "dev": "nodemon app.js"
}
```

So you can simply run:

```bash
npm run dev
```

Perfect for active development! 🔄

---

## 📁 **Project Structure**

A typical layout for EventLink:

```
EventLink/
│── app.js
│── package.json
│── .env
│── /models
│── /routes
│── /views        → Pug templates
│── /public       → CSS, JS, images
└── /controllers
```

---

## 📘 **More Info**

Dive deeper into explanations and design decisions in the **AI_logboek** file.

---

## 👨‍🎓 **Made at KU Leuven**

This project was created as part of a project for a course at **KU Leuven**.
It showcases skills in:

* Backend development
* Authentication & security
* MongoDB + Mongoose
* Templating with Pug
* Session handling
* Clean express architecture
