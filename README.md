# 🌐 URL Shortener

A backend-based **URL Shortener** built with **Node.js, Express, MongoDB, and EJS**.  
It allows users to shorten long URLs into short codes and redirect back to the original URL. 🚀

---

## ✨ Features
- Shorten long URLs into unique short codes
- Store shortened links in **MongoDB**
- Redirect short code → original URL
- EJS-based frontend rendering
- Static assets served from `/public` folder

---

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ODM)
- **View Engine:** EJS
- **Frontend Assets:** HTML, CSS, JavaScript (in `public/`)

---

## 📂 Project Structure

URL_Shortener/
├── Controllers/
│ └── url.js # Logic for shortening and retrieving URLs
├── public/ # Static assets (CSS, JS)
│ └── style.css
├── views/ # EJS templates
│ └── index.ejs
├── server.js # Main server file
├── package.json
└── README.md


1-> Install dependencies

npm i init -y
npm i express ejs mongoose shortid

2-> Run the server
nodemon server.js
3-> Open in Browser
https://localhost:1000

4->



