var friends = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        console.log(req.body.name);
        console.log(req.body.photo);
        console.log(req.body.scores);

        var user = req.body;

        for (var i = 0; i < user.scores.length; i++) {
            user.scores[i] = parseInt(user.scores[i]);
        }

        var best_friend = 0;
        var difference_range = 30;

        for (var i = 0; i < friends.length; i++) {
            var total_difference = 0;
            for (var j = 0; j < friends[i].questions.length; j++) {
                var difference = Math.abs(user.scores[j] - friends[i].questions[j]);
                total_difference += difference;
            }
            if(total_difference < difference_range) {
                best_friend = i;
                difference_range = total_difference;
            }
            console.log(total_difference);
            // console.log(difference_range);
        }
        friends.push(user);
        // console.log(user);
        res.json(friends[best_friend]);
        console.log(best_friend)
    });
};