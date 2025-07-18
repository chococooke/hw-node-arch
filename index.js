const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { exec } = require("child_process");
dotenv.config({ quiet: true });

const PORT = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res) => {
  console.log(req.headers);
  res.send("hello, world");
});

app.get("/health", () => {
    res.json({message: "healthy"})
})

app.get("/deploy", (req, res) => {
  console.log("deploying...");
  exec("git pull; npm install ; pm2 restart logger", (err, stdout, stderr) => {
    if (stderr) {
      console.log(stderr.trim());
      return;
    }

    if (err) {
      console.log(err);
      return;
    }

    console.log(stdout.trim());
  });
});

app.listen(PORT, () => console.log("Listening on port", PORT));
