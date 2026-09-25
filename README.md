Zenith Product API

Project Overview
I created a Product API for Zenith.

I used:

Node.js
Express
MongoDB Atlas
Mongoose
dotenv

The API lets me:

Create products
View products
Update products
Delete products
Filter products
Sort products
Use pagination

Project Files:

config/connection.js
models/Product.js
routes/productRoutes.js
server.js
.env
.gitignore
package.json
README.md
reflection.md

How to Run
1. Open the project in VS Code.
2. Open the terminal.
3. Run:
npm install

4. Create a .env file.
5. Add:
MONGO_URI=your_mongodb_connection_string
PORT=3000
6. Run:
npm start

If everything works, I should see:

MongoDB connected successfully!
Server is running on port 3000
API Routes
Create Product
POST http://localhost:3000/api/products

View All Products
GET http://localhost:3000/api/products

View One Product
GET http://localhost:3000/api/products/PRODUCT_ID

Update Product
PUT http://localhost:3000/api/products/PRODUCT_ID

Delete Product
DELETE http://localhost:3000/api/products/PRODUCT_ID

Filter by Category
GET http://localhost:3000/api/products?category=Electronics

Sort by Price
Lowest to highest:

GET http://localhost:3000/api/products?sortBy=price_asc
Highest to lowest:

GET http://localhost:3000/api/products?sortBy=price_desc
Pagination

GET http://localhost:3000/api/products?page=1&limit=5

What I Learned:
I learned how to connect Express to MongoDB.
I learned how to create CRUD routes.
I also learned how to filter, sort, and organize product data.

Author: Dr. Chantell McDowell
Per Scholas Student
