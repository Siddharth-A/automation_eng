// 10. add comments by association to each post
// 10.1 define comments table in models/comments.js file
// 10.2 associate comments to each post ()
// postid column is created in table in sql
// if table created before association, drop table in sqlbench & refresh
// 10.3 create routes for your comments
// 10.4 add comments route to index.js
// 10.5 associate get multiple comments to a single post

// 10.1
module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define("Comments", {
    commentbody: { type: DataTypes.STRING, allowNull: false },
  });
  return Comments;
};
