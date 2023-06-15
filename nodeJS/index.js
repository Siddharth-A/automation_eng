// nvm install 20
// nvm use 20 (similar to virtualenv)
// npm install express
// node index.js

// for hot-reload
    // npm install nodemon
    // refer to package.json scripts
    // npm start

// learn JS one liners since code is downloaded b4 website, it needs to be compact

const express = require("express");
const app = express();
const port = 3000;

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