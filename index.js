var express = require('express');

var app = express();

function returnMessage() {
    return 'Hello Devops';
}
app.get('/', function (req, res) {
 res.send(returnMessage());
});

app.listen(process.env.PORT || 3000);

module.exports = app;