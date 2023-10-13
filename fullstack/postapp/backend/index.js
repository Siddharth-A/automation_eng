// npm install express cors mysql2 nodemon
// node index.js

// 1. for hot-reload
    // npm install nodemon
    // refer to package.json scripts
    // npm start

// 2. add basic bare minimum code

// 3. for database
    // download mysql server
    // download mysql workbench
    // create new schema in workbench
    // npm install -g sequelize sequelize-cli
    // sequelize init
    // this will create a bunch of files and dirs
    // create new file under models/ for whatever table you want to create
    // 3.1 define the table within this file along with the columns you want it to have (function postsinit)
    // 3.2 setup config/config.json development database info
    // 3.3 import db into index.js

// 2. basic bare minimum setup
const express = require('express')
const app = express()

app.listen(3001, () => {
    console.log("TEST: server running on port 3001")
});

// 3.3 import db into index.js. sequelize.sync creates the table in db if not created
const db = require("./models")
db.sequelize.sync().then(() =>{
    console.log("initialize posts table in DB")
});