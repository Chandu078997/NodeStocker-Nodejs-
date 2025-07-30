# 🧾 NodeStocker - Product Inventory REST API (Node.js + Express)

> A simple yet powerful **RESTful API** for managing a product inventory, built using **Node.js** and **Express.js**. Perfect for learning, testing, and as a backend for inventory apps.

---

## 🌐 Live Demo

🔗 **Backend Deployed URL**:  
**[https://nodestocker-nodejs.onrender.com](https://nodestocker-nodejs.onrender.com)**

---

## 📌 Key Features

✅ RESTful API with full CRUD support  
✅ Built with Express.js  
✅ In-memory data store (no DB needed)  
✅ Input validation  
✅ Search & Pagination  
✅ CORS enabled for frontend integration  
✅ Clean code structure for easy expansion

---

## 🏗️ Tech Stack

- **Backend**: Node.js, Express.js  
- **Data**: In-memory Array  
- **Deployment**: [Render](https://render.com)  
- **Tooling**: Postman for testing, Git for version control  

---

## 🔒 CORS (Cross-Origin Resource Sharing)

To allow this API to be consumed by a frontend running on a different origin (e.g., `localhost:5173` or deployed React frontend), **CORS is enabled** using the `cors` package.

### 🔧 How it’s configured in `app.js`:

```js
const cors = require('cors');
app.use(cors()); // Allow all origins (default setting)
