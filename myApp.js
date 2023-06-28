require('dotenv').config()
var bodyParser = require('body-parser');
let express = require('express');
let app = express();


app.use((req, res, next) => {
    let string = `${req.method} ${req.path} - ${req.ip}`;
    console.log(string);

    next();
});
app.use(bodyParser.urlencoded({extended: false}));
app.get("/", (req, res) => res.sendFile(__dirname + "/views/index.html"));
app.use("/public", express.static(__dirname + "/public"));
app.get("/json", (req, res) => {
    const json = {message:"Hello json"};
    json.message = process.env.MESSAGE_STYLE === "uppercase" ? json.message.toUpperCase():json.message;
    res.json(json);
});

app.get('/now', function(req, res, next) {// Hypothetical synchronous operation
    next();
  }, function(req, res) {
    var time = new Date();
    console.log('time ' + time);
    res.json({
        'time':time
    });
  });


app.get('/:word/echo', (req, res) => {
    let word = req.params.word;

    let jsonObj = {echo: word, echo: word};
    res.send(jsonObj);
});

app.get('/name', (req, res) => {
    let first = req.query.first;
    let last = req.query.last;

    let jsonObj = { name: `${first} ${last}`};
    res.send(jsonObj);
});

app.post('/name', (req, res) => {
    let name = req.body.first + ' ' + req.body.last;
    res.json({name: name});
});

module.exports = app;
































 module.exports = app;
