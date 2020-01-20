// Dependencies required for app
var express = require("express");
var path = require("path");

// Sets up the Express server
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express server to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


// Displays home.html
// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "/app/public/home.html"));
// });

// //Displays survey.html
// app.get("/survey", function(req, res) {
//     res.sendFile(path.join(__dirname, "/app/public/survey.html"));
// });

//API Call for survey participants
// app.get("/api/friends", function(req, res) {
//     return res.json(friends);
// });

// //Create new friend
// app.post("/api/friends", function(req, res) {
    
//     var survey = req.body;

//     friends.push(survey);
//     console.log(survey);
//     res.json(survey)
// });

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});