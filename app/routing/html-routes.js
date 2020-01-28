//Dependency requirements
var path = require("path");

//route
module.exports = function (app) {

    //GET request
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });

    //If route not found default to home 
    app.use(function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });

}