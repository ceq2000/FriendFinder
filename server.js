var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 8080;

//App x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: true }));

//Parse custom JSON types as JSON
app.use(bodyParser.json({ type: 'application*+json' }))

//Parse customized thing as buffer
app.use(bodyParser.raw({ type: 'vnd.custom-type' }))

//Parse HTML body into string
app.use(bodyParser.text({ type: 'text/html' }))

require("./app/routing/api-routes.js")(app);
require("./app/routing/html-routes.js")(app);

//App listen PORT
app.listen(PORT, function () {
    console.log('===> Friend Finder App listening on PORT: ' + PORT);
});