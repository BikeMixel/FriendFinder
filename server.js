var express = require("express")
var path = require("path")

var app = express()
var PORT = process.env.PORT || 8080

app.listen(PORT, function () {
    console.log("Listening on http://localhost:" + PORT)
})