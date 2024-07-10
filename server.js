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
  company TEXT,
  phone TEXT,
  email TEXT,
  hero TEXT,
  message TEXT
)`;

// const dropTableSQL = `DROP TABLE IF EXISTS users`;

// db.run(dropTableSQL, (err) => {
//   if(err) {
//     console.error(`Error dropping table: ${err.message}`);
//   } else {
//     console.log('Users table dropped if it existed.');
//     // Now create the new table
//     db.run(createTableSQL, (err) => {
//       if(err) {
//         console.error(`Error creating table ${err.message}`);
//       } else {
//         console.log('Users table created with the new structure.');
//       }
//     });
//   }
// });



// const insertSQL = `INSERT INTO users (user_name, user_email) VALUES (?, ?)`;
const insertSQL = `INSERT INTO users (name, company, phone, email, hero, message) VALUES (?,?,? ,?,?,?)`;

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
  const user_hero = req.body.hero;
  const user_message = req.body.message;

  console.log(`Name: ${user_name}, Email: ${user_email} Company ${user_company} ${user_phone} hero ${user_hero} user_message ${user_message}`);

  db.run(insertSQL, [user_name, user_company, user_phone, user_email, user_hero, user_message], (err) => {
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
