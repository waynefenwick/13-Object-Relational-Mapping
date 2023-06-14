Preparation
     1. Create a project folder and npm all necessary modules
     2. Create config folder with connection.js
     3. Create db folder with database schema.sql
     4. Create models folder with relevant .js model files and the appropriate index.js
     5. Create seeds folder with relevant .js seed files and the appropriate index.js
     6. Create routes/api folder with relevant .js route files. Create appropriate index.js file in the routes folder
     7. Create the server.js file

Activation
     1. Create a mySQL database
          * Open a terminal on db folder and log into mysql
          * Type in 'source schema.sql' to create the database
     3. Seed the database
          * Open a terminal on the seeds folder and type in 'node index.js' to seed the database with provided table data in the seeds folder
     3. Start the Server
          * Open a terminal on server.js and type in 'npm start' to get the "server listening on port 3001"
     4. Run the tests
          * Open Insomnia to run tests
