var express = require("express")
var path = require("path")
var htmlRoutes = require("./app/routing/htmlRoutes")
var apiRoutes = require("./app/routing/apiRoutes")

var app = express()
app.use(htmlRoutes)
app.use(apiRoutes)
var PORT = process.env.PORT || 8080

app.listen(PORT, function () {
    console.log("Listening on http://localhost:" + PORT)
})