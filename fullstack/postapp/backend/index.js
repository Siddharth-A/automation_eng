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
    // 3.1 define the table within models/posts along with the columns you want it to have (function postsinit)
    // 3.2 setup config/config.json development database info
    // 3.3 import db into index.js

// 4. GET & POST requests
    // create routes/posts.js file
    // 4.1 add GET code to routes/posts.js
    // using postman for get/post requests
    // 4.2 add POST code to routes/posts.js
    // 4.3 connect GET&POST routes/posts.js to index.js

// 5. whitelist and connect to frontend
    // npm install cors
    // 5.1 add code to white list and connect FE

// 2. basic bare minimum setup
const express = require('express')
const app = express()

// 5.1 add code to white list and connect FE
const cors = require('cors');
app.use(cors());



app.listen(3001, () => {
    console.log("TEST: server running on port 3001")
});

// 3.3 import db into index.js. sequelize.sync creates the table in db if not created
const db = require("./models")
db.sequelize.sync().then(() =>{
    console.log("initialize all tables in DB")
});

// 4.4 connect GET routes/posts.js to index.js
app.use(express.json()); //allow for post requests to use body

const postRouter = require('./routes/posts')
app.use("/posts", postRouter)
// 10.4
const commentRouter = require('./routes/comments')
app.use("/comments", commentRouter)

// // 4.4 connect POST routes/posts.js to index.js
// const postRouter = require('./routes/posts')
// app.use("/posts", postRouter)