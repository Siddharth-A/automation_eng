// nvm install 20
// nvm use 20 (similar to virtualenv)
// npm install express
// node index.js

// for hot-reload
    // npm install nodemon
    // refer to package.json scripts
    // npm start

// learn JS one liners since code is downloaded b4 website, it needs to be compact

// postman
    // you can use postman to test the get/post cmds: http://localhost:3000/v2/movies/2

const express = require("express");
const app = express();
const port = 3000;

const db = require("./db");
// console.log(db)

const list = [
    {title:"title 1", description:"description1"}, 
    {title:"title 2", description:"description2"}, 
    {title:"title 3", description:"description3"}, 
    {title:"title 4", description:"description4"}, 
    {title:"title 5", description:"description5"}
];

// ###########################################
// GET REQUESTS
app.get("/", (req,res) => {
    res.send("no hello");
});

app.get("/movies", (req,res) => {
    res.send(list);
});

app.get("/titles", (req,res) => {
    // const titles=[];
    const titles = list.map((x) => {
        return x.title
    });
    // for(let i=0; i<list.length; i++){
    //     titles[i] = list[i].title;
    // }
    res.send(titles);
});

app.get("/desc", (req,res) =>{
    const desc = list.map(function(x) {
        return x.description;
    });
    res.send(desc);
});

// wildcard routes
app.get("/movies/:index/:id", (req,res) => {
    const { id } = req.params;
    const { index } = req.params; //checks for index param as string in the link
    console.log(req.params);
    res.send(list[index]);
});

// database get routes
app.get("/v2/movies", (req,res) => {
    const query1 = `SELECT * FROM new_schema.movies;`;
    db.query(query1, (error, results) => {
        if (error) {
          return console.error(error.message);
        }
        res.send(results);
    });
});

app.get("/v2/movies/:index", (req, res) => {
    const { index } = req.params;
    // const query2 = `SELECT * FROM new_schema.movies where idmovies=${index}` this works but prone to SQL injection attacks
    const query2 = `SELECT * FROM new_schema.movies where idmovies = (?)` //(?) is an "SQL operator" to escape user input and sql injects
    db.query(query2, index, (error, results) => {
        res.send(results);
    });
});


// ###########################################

// ###########################################
// POST REQUESTS

app.post("/movies", (req,res) => {
    const movie_obj = {title: "title 6", description: "description 6"};
    list.push(movie_obj);
    res.send(list);
})

// ###########################################


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});