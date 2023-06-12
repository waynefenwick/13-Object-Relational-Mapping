Preparation
1: create a project folder and npm all necessary modules
2: create config folder with connection.js
3: create db folder with database schema.sql
4: create models folder with relevant .js model files and the appropriate index.js
5: create seeds folder with relevant .js seed files and the appropriate index.js
6: create routes/api folder with relevant .js route files. Create appropriate index.js file in the routes folder
7: create the server.js file

Activation
1. MySQL: open terminal on db folder, log into mysql and run schema.sql to create the database
2. Server: open server.js on another terminal and 'npm start' to get the "server listening on port 3001"
3. Seed the db: open terminal on the project folder and enter 'node seeds/index.js'
4. GET, POST, PUT, DELETE tests on insomnia: open terminal on routes forlder and npm start and open insomnia


Create (C) - This operation is used to create a new resource.

HTTP Method: POST
Purpose: Sends data to the server to create a new resource.
Example: Creating a new user by sending user data in the request body to the server.
Read (R) - This operation is used to retrieve or read existing resources.

HTTP Method: GET
Purpose: Retrieves data from the server.
Example: Fetching a list of products or retrieving a specific product by its ID.
Update (U) - This operation is used to update an existing resource.

NOTE:
CREATE (C) - This operation is used to create a new resource.
          HTTP Method: PUT or PATCH
          Purpose: Sends data to the server to update an existing resource.
          Example: Updating a user's information by sending updated data in the request body to the server.

READ   (R) - This operation is used to retrieve or read existing resources.
          HTTP Method: GET
          Purpose: Retrieves data from the server.
          Example: Fetching a list of products or retrieving a specific product by its ID.

UPDATE (U) - This operation is used to update an existing resource.
          HTTP Method: PUT or PATCH
          Purpose: Sends data to the server to update an existing resource.
          Example: Updating a user's information by sending updated data in the request body to the server.
          PUT vs. PATCH: PUT replaces the entire resource with the new data, while PATCH partially updates the resource with the provided changes.

DELETE (D) - This operation is used to delete an existing resource.
          HTTP Method: DELETE
          Purpose: Sends a request to the server to delete a resource.
          Example: Deleting a user by sending a DELETE request to the server with the user's ID.