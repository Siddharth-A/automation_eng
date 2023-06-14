// nvm install 20
// nvm use 20 (similar to virtualenv)
// npm install express
// node index.js

// for hot-reload
    // npm install nodemon
    // refer to package.json scripts
    // npm start

// 

const express = require("express");
const app = express();
const port = 3000;

const list = [
    {title:"title 1", description:"description1"}, 
    {title:"title 2", description:"description1"}, 
    {title:"title 3", description:"description1"}, 
    {title:"title 4", description:"description1"}, 
    {title:"title 5", description:"description1"}
];

app.get("/", (req,res) => {
    res.send("no hello");
});

app.get("/movies", (req,res) => {
    res.send(list);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});