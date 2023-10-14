const { application } = require('express');
const express = require('express')
const router = express.Router()
const { Posts } = require('../models')

// 4.1 add GET code to routes/posts.js
router.get("/", async (req, res) =>{
    const listofposts = await Posts.findAll();
    res.json(listofposts);
});

// 4.2 add POST code to routes/posts.js
router.post("/", async (req, res) => {
    const post = req.body;
    await Posts.create(post);
    res.json(post);
});

// 9.3
router.get('/byid/:id', async (req, res) => {
    const id = req.params.id;
    const post = await Posts.findByPk(id);
    res.json(post);
})

module.exports = router