// load data structure for people who have registered in Friend Finder

var peopleData = require('../data/friends');

/*
 * Routing for api
 */

module.exports = (app) => {
    /* API POST request
     * Below code will handle when a user submits a form. The data that the user
     * will submit is a survey which will come as a JSON object. The JSON will
     * be pushed into the peopleData data structure imported from friends.js
     */

    app.post('/api/friends', (req, res) => {
        /*
         * The server will push the survey data into the people array.
         * It will then search for a match and will return the closest person.
         * The name of the person and photolink as well as a boolean value True
         * are returned if there is a match otherwise a boolean value of false is
         * returned.
         */

        // compute differences between incoming survey (req.body.scores) and existing data.    
        var diff = 0;
        var totalDiff = 0;
        for (var peopleLen = 0; peopleLen < peopleData.length; peopleLen++) {
            totalDiff = 0;
            for (var scoresLen = 0; scoresLen < peopleData[peopleLen].scores.length; scoresLen++) {
                diff = 0;
                diff = req.body.scores[scoresLen] - peopleData[peopleLen].scores[scoresLen];
                totalDiff += diff < 0 ? diff * -1 : diff;
            }
            // update difference element in peopleData object for each person
            peopleData[peopleLen].difference = totalDiff;
        }

        // find person with least difference   
        var indexNo = 0; // assume the first record is that with the least difference
        for (var peopleLen = 1; peopleLen < peopleData.length; peopleLen++) {
            if (peopleData[indexNo].difference > peopleData[peopleLen].difference) {
                indexNo = peopleLen;
            }
        }

        // construct return data
        var returnData;
        if (peopleData.length > 0) {
            // if there is data in the people array, there has to be a match because no total difference threshold is specified
            returnData = {
                matched: true,
                name: peopleData[indexNo].personName,
                photoSrc: peopleData[indexNo].photoLink
            };
        } else {
            // if there is no data in the people array, this indicates no match has taken place
            returnData = {
                matched: false
            };
        }

        // save the survey
        peopleData.push(req.body);

        // respond to user on browser
        res.json(returnData);

    });

    /*
     * The server will respond with a json object of the peopleData. The peopleData is an array
     * of objects.
     */
    app.get("/api/friends", (req, res) => {
        res.json(peopleData);
    });

}