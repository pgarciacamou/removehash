var express = require('express'),
app = express();
app.set('view engine', 'html');
app.get('/', function(req, res) {
    res.sendfile('index.html', {root: __dirname })
});
var server = app.listen(process.env.PORT || 80);