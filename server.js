// load env vars
var express = require('express');

// load express-handlebars

// bring in the models

// listen on port 3000

var app = express();

// Serve static content for the app from the "public" directory in the application directory.

// Parse request body as JSON


app.engine(
    'handlebars',
    exphbs({
        defaultLayout: 'main',
        helpers: {
            renderUrl: (value) => (value === '/burgers' ? true : false),
        },
    }),
);
app.set('view engine', 'handlebars');

// import routes

// attach router middleware to app instance

// sync database with sequelize
app.listen(PORT, () => {
    console.log('App listening on PORT http://localhost:' + PORT);
});
