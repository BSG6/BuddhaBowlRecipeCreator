# BuddhaBowlRecipeCreator
# 🥗 Build Your Bowl

Buddha Bowl is a full-stack recipe app where users can create custom bowls, save them, and interact with others by voting on their creations. It includes full CRUD functionality and authentication.

---

## Features

- **User Authentication** – Local signup/login using Passport.js and bcrypt
- **Create a Bowl** – Users input a title, base, protein, veggies, and optional toppings
- **Save to MongoDB** – Recipes are stored in the `bowl` collection and displayed on the recipes page
- **Thumbs Up / Down** – Users can vote on recipes to boost or drop their popularity
- **Delete** – Recipes can be removed from the collection
- **Form + Feedback UI** – All input handled via JS with fetch requests and reloads

---

## Tech Stack

- Node.js + Express
- MongoDB + Mongoose
- EJS for templating
- JavaScript (DOM manipulation + fetch)
- Passport.js for authentication
- bcrypt for password hashing
- Multer, Method-Override, Flash for middleware and messaging

