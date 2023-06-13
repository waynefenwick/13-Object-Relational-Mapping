const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// Establish the database connection and sync sequelize models
sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
    return sequelize.sync({ force: false });
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}!`);
    });
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
