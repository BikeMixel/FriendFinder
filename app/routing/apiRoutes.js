var friends = require("/Users/mike/Desktop/FriendFinder/app/data/friends.js")

var express = require("express")
var router = express.Router()

router.get("/api/friends", function (req, res) {
    res.json(friends)
})

router.post("/api/friends", function (req, res) {
    var difference = 25
    var matchName = ""
    var matchImage = ""

    friends.forEach(function (friend) {
        var matchArray = []
        var totalDifference = 25

        for (var i = 0; i < 10; i++) {
            matchArray.push(Math.abs(parseInt(res.body.scores[i]) - parseInt(friends.scores[i])))
        }

        function addHelp (total, num) {
            return total + num
        }
        totalDifference = matchArray.reduce(addHelp, 0)

        if (totalDifference < difference) {
            difference = totalDifference
            matchName = friend.name
            matchImage = friend.photo
        }
    })
    res.json({
        name: matchName,
        photo: matchImage
    })
    friends.push(req.body)
})

module.exports = router
