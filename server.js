const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');
// use express-handlebar.js
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* The express.static() method is a built-in Express.js middleware function that can take all 
of the contents of a folder and serve them as static assets. This is useful for front-end specific files like images,
style sheets, and JavaScript files.*/
app.use(express.static(path.join(__dirname, 'public')));
// turn on routes
app.use(routes);
// use express-handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// turn on connection to db and server
/* the use of {force: false} in the .sync() method. This doesn't have to be included, but if it were set to true, 
it would drop and re-create all of the database tables on startup. This is great for when we make changes to the Sequelize models, 
as the database would need a way to understand that something has changed. We'll have to do that a few times throughout this project, 
so it's best to keep the {force: false} there for now.*/
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});