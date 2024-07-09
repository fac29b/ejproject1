const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const PORT = 3001;
let sql;
const sqlite3 = require("sqlite3").verbose();
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));


const db = new sqlite3.Database("./test.db", sqlite3.OPEN_READWRITE, (err) => {
  if(err) return console.error(err.message);
});


const createTableSQL = `CREATE TABLE IF NOT EXISTS users(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  email TEXT
)`;



// const insertSQL = `INSERT INTO users (user_name, user_email) VALUES (?, ?)`;
const insertSQL = `INSERT INTO users (name, email) VALUES (?, ?)`;

db.run(createTableSQL, (err) => {
  if(err) {
    console.error(`Error creating table ${err.message}`);
  } else {
    console.log('Users table created or already exists.')
  }
})



app.post("/submit", (req, res) => {
  const user_name = req.body.name;
  const user_company = req.body.company;
  const user_phone = req.body.phone;
  const user_email = req.body.email;

  console.log(`Name: ${user_name}, Email: ${user_email} Company ${user_company} ${user_phone}`);

  db.run(insertSQL, [user_name, user_email], (err) => {
    if(err) {
      console.error('Error inserting data:', err.message);
      // res.status(500).send('Error submitting form');
    } else {
      sql = "SELECT * FROM users";
      db.all(sql, [], (err, rows) => {
        if (err) return console.log(err.message);
        rows.forEach(row => {
          console.log(row);
        })
      })

    }
  })

  res.send(`Thank you for your submission, ${user_name}!`);
});

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`application listening on port ${PORT}`);
});
