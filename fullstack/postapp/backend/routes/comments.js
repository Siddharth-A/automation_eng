// 10.3 create routes for your comments
// 10.4 add comments route to index.js
// 10.5 associate get multiple comments to a single post
// 10.6 add route to comment posts

// const { application } = require("express");
const express = require("express");
const router = express.Router();
const { Comments } = require("../models");

// 10.5
router.get("/:postid", async (req, res) => {
  const postid = req.params.postid;
  const comments = await Comments.findAll({ where: { PostId: postid } });
  res.json(comments);
});

// 10.6
router.post("/", async (req, res) => {
  const comment = req.body;
  await Comments.create(comment);
  res.json(comment);
});

module.exports = router;
