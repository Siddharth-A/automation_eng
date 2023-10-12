// npm install express cors mysql2 nodemon
// node index.js

// for hot-reload
    // npm install nodemon
    // refer to package.json scripts
    // npm start

// for database
    // download mysql server
    // download mysql workbench
    // create new schema in workbench
    // npm install -g sequelize sequelize-cli
    // sequelize init
    // this will create a bunch of files and dirs
    // create new file under models/ for whatever table you want to create
    // define the table within this file along with the columns you want it to have (function postsinit)
    // setup config/config.json
    // import db into index.js

// basic bare minimum setup
const express = require('express')
const app = express()

app.listen(3001, () => {
    console.log("TEST: server running on port 3001")
});

// import db into index.js. sequelize.sync creates the table in db if not created
const db = require("./models")
db.sequelize.sync().then(() =>{
    console.log("initialize posts table in DB")
});