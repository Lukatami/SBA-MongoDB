# 🛒 SBA MongoDB Inventory API

`README Disclaimer: README.md is partially generated and formatted using AI`

A RESTful API for managing users, suppliers, and items in an inventory system, built with **Node.js**, **Express**, and **MongoDB**. This project demonstrates best practices in data modeling, CRUD operations, indexing, and data validation.

---

## 🌟 Features

- Full **CRUD** operations for **Users**, **Suppliers**, and **Items**.
- Sample data `generated using AI with provided Schemas` included and easily seeded into the database.
- Proper data validation rules and unique constraints.
- Optimized queries with **indexes** on frequently queried fields.
- Layered architecture with **Models → Controllers → Routes**.
- Error handling and logging middleware included.
- Health check route for monitoring server status.

---

## 🗂️ Project Structure

```
src/
├─ config/
│  └─ database.js        # MongoDB connection
├─ controllers/
│  ├─ itemController.js
│  ├─ supplierController.js
│  └─ userController.js
├─ data/
│  ├─ sampleItems.js
│  ├─ sampleSuppliers.js
│  └─ sampleUsers.js
├─ middleware/
│  ├─ errorHandler.js
│  ├─ logger.js
│  └─ route404Handler.js
├─ models/
│  ├─ Item.js
│  ├─ Supplier.js
│  └─ User.js
├─ routes/
│  ├─ items.js
│  ├─ suppliers.js
│  └─ users.js
├─ scripts/
│  └─ seed.js            # Seed database with sample data
├─ app.js                # Express app setup
├─ server.js             # Server start
└─ gradingHelp.md        # Special
```

---

## ⚡ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/sba-mongodb.git
cd sba-mongodb
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory:

```
ATLAS_URI=<your_mongodb_connection_string>
PORT=5000
```

### 4. Seed the database

```bash
npm run seed
```

### 5. Start the server

```bash
npm run app
```

Server will run at: `http://localhost:5000/api/health`

---

## 📦 API Routes

### Users

| Method | Endpoint       | Description       |
| ------ | -------------- | ----------------- |
| GET    | /api/users     | Get all users     |
| GET    | /api/users/:id | Get user by ID    |
| POST   | /api/users     | Create a new user |
| PATCH  | /api/users/:id | Update a user     |
| DELETE | /api/users/:id | Delete a user     |

### Suppliers

| Method | Endpoint           | Description           |
| ------ | ------------------ | --------------------- |
| GET    | /api/suppliers     | Get all suppliers     |
| GET    | /api/suppliers/:id | Get supplier by ID    |
| POST   | /api/suppliers     | Create a new supplier |
| PATCH  | /api/suppliers/:id | Update a supplier     |
| DELETE | /api/suppliers/:id | Delete a supplier     |

### Items

| Method | Endpoint                      | Description           |
| ------ | ----------------------------- | --------------------- |
| GET    | /api/items                    | Get all items         |
| GET    | /api/items/:id                | Get item by ID        |
| GET    | /api/items/category/:category | Get items by category |
| GET    | /api/items/supplier/:id       | Get items by supplier |
| POST   | /api/items                    | Create a new item     |
| PATCH  | /api/items/:id                | Update an item        |
| DELETE | /api/items/:id                | Delete an item        |

---

## 🔍 Features in Depth

- **Data validation:** ensures fields like `username`, `email`, `item name`, and `supplier` comply with rules such as required, unique, min/max, enums, and regex patterns.
- **Indexes:**
  - `Item`: name + supplier unique, category, supplier, text search on name.
  - `Supplier`: email indexed.
  - `User`: username and email unique with automatic indexes.
- **Seed data:** 5+ sample users, suppliers, and items `generated using AI with provided Schemas`. Items assigned randomly to suppliers.
- **Middleware:**
  - `logger` for request logging.
  - `errorHandler` for catching exceptions.
  - `route404Handler` for unregistered routes.

---

## 👨‍💻 Author

Dmitrii Izrailit – inventory management API demo.
