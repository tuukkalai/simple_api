var express = require("express");
var app = express();

app.listen(3000, () => {
     console.log('running on port 3000');
});

app.get('/get', (req, res, next) => {
     res.json(['Example response', 'banana']);
});