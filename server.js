//Dependencies
const path = require("path");
const express = require("express");

// Import the custom helper methods
const helpers = require('./utils/helpers');

const routes = require("./controllers");
const sequelize = require("./config/connection");
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helpers });

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Set Handlebars as the default template engine.
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Turn on routes
app.use(routes);

// Turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () =>
        console.log('Now listening on PORT # http://localhost:3001')
    );
});

// app.post('/', (req, res) {
//     response.send(request.body)
// })