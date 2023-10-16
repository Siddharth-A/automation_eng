// 9. page navigation based on ID
// import useParams
// 9.2 add code for onclick to route to specific page
// 9.3 Add route to display a single post
// 9.4 display data on frontend

// 11. display comments
// 11.1 add api to get comments from backend route
// 11.2 display comments in front end
// 11.3 add api to post comment from backend route
// 11.4 do an optimistic update after submitting comment

import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Post() {
  let { id } = useParams();

  //9.2
  const [postobject, setpostobject] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:3001/posts/byid/${id}`).then((response) => {
      setpostobject(response.data);
    });
  }, []);

  // 11.1
  const [comments, setcomments] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3001/comments/${id}`).then((response) => {
      setcomments(response.data);
    });
  }, []);

  // 11.3
  const [newcomment, setnewcomment] = useState("");
  const addComment = () => {
    axios
      .post("http://localhost:3001/comments", {
        commentbody: newcomment,
        PostId: id,
      })
      .then((response) => {
        console.log("comment submitted to database");
        // 11.4 (...comments is called array destructuring)
        const commenttoadd = { commentbody: newcomment };
        setcomments([...comments, commenttoadd]);
        setnewcomment("")
      });
  };

  return (
    <div className="postPage">
      <div className="leftSide">
        <div className="post" id="individual">
          <div className="title"> {postobject.title} </div>
          <div className="body">{postobject.posttext}</div>
          <div className="footer">{postobject.username}</div>
        </div>
      </div>
      <div className="rightSide">
        <div className="addCommentContainer">
          <input
            type="text"
            placeholder="comment..."
            autoComplete="off"
            value={newcomment}
            onChange={(event) => setnewcomment(event.target.value)}
          />
          <button onClick={addComment}>Post comment</button>
        </div>
        <div className="listOfComments">
          {/* 11.2 */}
          {comments.map((comment, key) => {
            return <div className="comment"> {comment.commentbody}</div>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Post;
