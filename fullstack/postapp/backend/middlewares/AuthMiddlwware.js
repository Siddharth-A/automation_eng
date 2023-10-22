// 13.3
// 13.4.2 get token from FE and verify if its valid. if valid continue with comment
// 13.5 import validate function to routes/comments.js
// 13.4.1 send access token as header from FE
// 13.6 check response error before doing an optimistic comment post

const { verify } = require("jsonwebtoken");

// 13.4.2
const validateToken = (req, res, next) => {
  const accessToken = req.header("accessToken");

  if (!accessToken) return res.json({ error: "User not logged in!" });

  try {
    const validToken = verify(accessToken, "importantsecret");
    if (validToken) {
      return next(); //move forward to routes/comments/js
    }
  } catch (err) {
    return res.json({ error: err });
  }
};
module.exports = { validateToken };
