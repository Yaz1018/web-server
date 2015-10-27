var express = require('express');
var app = express();
var PORT = 3000;

var middleWare = {
    requireAuthentication: function (req, res, next) {
        console.log('private route hit!');
        next();
    },
    logger: function (req, res, next) {

        var date = new Date().toString();
        console.log('Request: ' + req.method + ' ' + req.originalUrl + ' date: ' + date);
        next();
    }
};

app.use(middleWare.logger)

// /about
// about us
app.get('/about', middleWare.requireAuthentication, function (req, res) {
    res.send('About Us');
});

app.use(express.static(__dirname +'/public'));

app.listen(PORT, function () {
    console.log('Express server started on port ' + PORT);
});