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
