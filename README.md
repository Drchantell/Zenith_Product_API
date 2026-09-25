Dr. Chantell's Zenith Product API

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

Example product JSON
{
  "name": "Laptop",
  "description": "Gaming laptop",
  "price": 899.99,
  "category": "Electronics",
  "inStock": true,
  "tags": ["new", "sale"]
}

Example requests
- GET http://localhost:3000/api/products
- GET http://localhost:3000/api/products?category=Electronics
- GET http://localhost:3000/api/products?sortBy=price_asc
- GET http://localhost:3000/api/products?page=1&limit=5

API test checklist
- Confirm the server starts without errors
- Check the home route returns a success message
- Create a product with valid data
- Get all products and confirm the list appears
- Get one product by ID
- Update an existing product
- Delete a product
- Try invalid data and confirm the API sends a clear error

This project is for learning and practice. It is a basic backend API for product data.

This project gave me a chance to build a working product API using Node.js, Express, MongoDB, and Mongoose. I learned how to organize my project, connect to a database, create API routes, and handle input validation. The app includes basic CRUD features and supports filtering, sorting, and pagination. It is a simple but useful backend project that shows how data can be managed in a real application.

Author: 
Dr. Chantell McDowell
Per Scholas Student
