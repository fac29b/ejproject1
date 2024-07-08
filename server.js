const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const PORT = 3001;
let sql;
// const sqlite3 = require("sqlite3").verbose();
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/submit", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;

  console.log(`Name: ${name}, Email: ${email}`);

  res.send(`Thank you for your submission, ${name}!`);
});

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`application listening on port ${PORT}`);
});
