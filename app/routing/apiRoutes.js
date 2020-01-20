var friends = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        console.log(req.body.questions);

        var user = req.body;

        for (var i = 0; i < user.questions.length; i++) {
            user.questions[i] = parseInt(user.questions[i]);
        }

        var best_friend = 0;
        var difference_range = 10;

        for (var i = 0; i < friends.length; i++) {
            var total_difference = 0;
            for (var j = 0; j < friends[i].questions.length; j++) {
                var difference = Math.abs(user.questions[j] - friends[i].questions[j]);
                total_difference += difference;
            }
            if(total_difference < difference_range) {
                best_friend = i;
                difference_range = total_difference;
            }
        }
        friends.push(user);
        res.json(friends[best_friend]);
    });
};