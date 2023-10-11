// npm install express cors mysql2 nodemon
// node index.js

// for hot-reload
    // npm install nodemon
    // refer to package.json scripts
    // npm start

const express = require('express')
const app = express()

app.listen(3001, () => {
    console.log("TEST: server running on port 3001")
});