// Dependencies
var path = require('path'); // The path module provides utilities for working with file and directory paths

/*
 * Routing for html file rendering
 */
module.exports = (app) => {
    // Below code handles when a user visits a page. It sends relevant files to the browser
    // to allow the user to interact with the server.

    app.get('/survey', (req, res) => {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // if no matching route is found default to home
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

};