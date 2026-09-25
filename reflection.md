Reflection

Author: Dr. Chantell McDowell, Per Scholas Student

In this project, I learned how to build a complete RESTful API using Node.js, Express, MongoDB Atlas, and Mongoose. I practiced separating my code into folders for the database connection, model, and routes. This made the project easier for me to read and understand.

I also learned how CRUD operations connect to HTTP methods. POST creates a product, GET reads products, PUT updates a product, and DELETE removes a product. I used try and catch in every route so the API can respond properly when something goes wrong.

The most challenging part for me was the advanced GET route because it had to work with several optional query parameters at the same time. I learned how to build a filter object only when the user provides category, minimum price, or maximum price information. I also learned how sort, skip, and limit work with Mongoose to support sorting and pagination.

Another important thing I learned was how validation works. The Product schema requires a name, description, price, and category. The price must be greater than zero. I also used runValidators when updating a product so the same validation rules still apply during updates.

This project helped me understand how a backend API can manage product inventory and return useful data to another application such as an online store.

Author:
Dr. Chantell McDowell
Per Scholas Student