// 12.2 create new route to add users
// 12.4 take password in addition to username unlike in other routes
// npm install bcrypt
// verify route in postman
// 12.5 add route to login
// next point in front end

// 13 JWT authentication
// npm install jsonwebtoken
// 13.1 generate web token
// 13.2 save web token in local storage session (vulnerable to XSS attack)
// 13.3 create backend/middlewares => verify we want to proceed with request before acc proceeding

const { application } = require("express");
const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");
const { sign } = require('jsonwebtoken');

// 12.3 add route to post username in DB
router.post("/", async (req, res) => {
  const { username, password } = req.body; //12.4
  bcrypt.hash(password, 10).then((hash) => {
    Users.create({ username: username, password: hash });
  });

  res.json(`User ${username} registered`);
});

// 12.5 add route to login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await Users.findOne({ where: { username: username } }); //go to users table and find and populate users with user value in db if found
  if (!user) {
    res.json({ error: "User not in database!" });
    return;
  }

  const pwmatch = await bcrypt.compare(password, user.password);
  if (!pwmatch) {
    res.json({ error: "Wrong username and password combination!" });
    return;
  }

//   13.1
  if (user && pwmatch) {
    const accessToken = sign({username: user.username, id: user.id}, "importantsecret");
    res.json(accessToken);//send to front-end
    return;
  }
});

module.exports = router;
