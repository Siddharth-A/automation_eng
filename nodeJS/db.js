// download mysql server
// download mysql workbench
// create new schema in workbench
// create new table in schema
// you can test database queries in sql workbench
    // SELECT * FROM new_schema.movies;
    // where is a filter
    // SELECT * FROM new_schema.movies where idmovies=2;

const mysql = require("mysql2");
let db;

function connectDatabase() {
  if (!db) {
    db = mysql.createConnection({
      user: `root`,
      host: `localhost`,
      password: `Godfatherr123.`,
      database: `new_schema`
    });
    db.connect(function (err) {
      if (!err) {
        console.log("Database is connected!");
      } else {
        console.log(err);
      }
    });
  }
  return db;
}

module.exports = connectDatabase();