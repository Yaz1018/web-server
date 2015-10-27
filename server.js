var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var middleWare = require('./modules/middleware.js')


app.use(middleWare.logger)

// /about
// about us
app.get('/about', middleWare.requireAuthentication, function (req, res) {
    res.send('About Us!S');
});

app.use(express.static(__dirname +'/public'));

app.listen(PORT, function () {
    console.log('Express server started on port ' + PORT);
});
