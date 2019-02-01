

const express = require("express");
const hbs = require("hbs");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const app = express();

hbs.registerPartials(__dirname + "/views/partials");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "hbs");
app.use(methodOverride("_method"));

app.use(require("./routes/index.js"));
app.set('port, process.env.PORT || 5000');

// const port = process.env.PORT || 5000;
app.listen(app.get('port'), ()=> {
    console.log(`PORT: ${app.get('port')}`)
})

// app.listen(5000, () => console.log("server is running"));
