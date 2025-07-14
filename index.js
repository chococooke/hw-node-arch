const express  = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config({quiet: true});

const PORT = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res) => {res.send("hello, world")});


app.listen(PORT, () => console.log("Listening on port", PORT));
