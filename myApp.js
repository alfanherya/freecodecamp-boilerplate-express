require('dotenv').config()
let express = require('express');
let app = express();

app.use((req, res, next) => {
    let string = `${req.method} ${req.path} - ${req.ip}`;
    console.log(string);

    next();
});

app.get("/", (req, res) => res.sendFile(__dirname + "/views/index.html"));
app.use("/public", express.static(__dirname + "/public"));
app.get("/json", (req, res) => {
    const json = {message:"Hello json"};
    json.message = process.env.MESSAGE_STYLE === "uppercase" ? json.message.toUpperCase():json.message;
    res.json(json);
});



module.exports = app;
































 module.exports = app;
