Zenith Product API

This project is a simple API for managing products. It uses Node.js, Express, MongoDB Atlas, and Mongoose.

Features
- Create a product
- View all products
- View one product by ID
- Update a product
- Delete a product
- Filter products by category
- Sort by price
- Use pagination

Project files
- config/connection.js
- models/Product.js
- routes/productRoutes.js
- server.js
- .env
- package.json
- README.md
- reflection.md

How to run
1. Open the project in VS Code.
2. Install dependencies:
   npm install
3. Create a .env file.
4. Add your MongoDB connection string and port:
   MONGO_URI=your_mongodb_connection_string
   PORT=3000
5. Start the app:
   npm start

API routes
- POST /api/products
- GET /api/products
- GET /api/products/:id
- PUT /api/products/:id
- DELETE /api/products/:id

Example requests
- GET http://localhost:3000/api/products
- GET http://localhost:3000/api/products?category=Electronics
- GET http://localhost:3000/api/products?sortBy=price_asc
- GET http://localhost:3000/api/products?page=1&limit=5

This project is for learning and practice. It is a basic backend API for product data.

Author: Dr. Chantell McDowell
Per Scholas Student
