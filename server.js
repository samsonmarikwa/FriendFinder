// load packages
var express = require('express');
var bodyParser = require('body-parser');

// create express server
var app = express();

// declare port
var PORT = process.env.PORT || 8080;

// The code below is part of middleware that causes express to locate static files as it
// allows the server to search for css, images and script files from the folder specified.
app.use(express.static(__dirname + '/app/public'));
// app.use('/static', express.static(__dirname + '/app/public'));
// I could have used the above statement, then all my references to static files would
// start with the word static as this would be treated as a virtual mount point. For example,
// to pick css, I would put it as follows
// <link rel="stylesheet" type="text/css" media="screen" ref="static/assets/css/style.css" />
// sets up Express to handle data parsing

// middleware that allows express to parse the req.body object as it is submitted to the server
// from the browser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// load route handling files. apiRoutes is a file with routes to api codes. This mostly
// handles data (req.body) and returns data to the browser.
// htmlRoutes handles the serving of webpages (html) to the browser.
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// listen to the port
app.listen(PORT, () => {
    console.log('Server running on port: ' + PORT);
});