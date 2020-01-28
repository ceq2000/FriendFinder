var friends = require('../data/friends.js');

//Routes
module.exports = function (app) {
    // API GET Requests
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    // API POST Requests
    app.post('./api/friends', function (req, res) {

        //friend match comparison
        let totalDifference = 0;

        //Object for optimal match
        let optimalMatch = {
            name: '',
            photo: '',
            friendDifference: 1000
        };
        console.log(req.body);

        //Parsing of survey post results
        let userData = req.body;
        let userScores = userData.scores;

        console.log(userScores);
        // let userName = userData.name;

        //Calculates difference between user scores and all other user scores
        var totalDifference = 0;

        //Loop through all friends responses (previous user inputs)
        for (var i = 0; i = friends.length; i++); {

            console.log(friends[i]);
            totalDifference = 0;

            //Loop through scores of each friend 
            for (var j = 0; j < friends[i].scores[j]; j++) {

                //Calculates difference between scores and adds it to totalDifference
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

                //If sum of differences < differences from optimalMatch
                if (totalDifference <= optimalMatch.friendDifference) {

                    //Reset optimalMatch to be new friend
                    optimalMatch.name = friends[i].name;
                    optimalMatch.photo = friends[i].photo;
                    optimalMatch.friendDifference = friends[i].totalDifference;
                }

            }

        };

        friends.push(userData);

        //Return a JSON with optimalMatch to be used in HTML...
        res.json(optimalMatch);

    });

}