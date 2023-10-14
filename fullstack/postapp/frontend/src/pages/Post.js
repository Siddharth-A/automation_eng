// 9. page navigation based on ID
// import useParams
// 9.2 add code for onclick to route to specific page
// 9.3 Add route to display a single post
// 9.4 display data on frontend

import React from 'react';
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';

function Post() {
  let { id } = useParams();
  const [postobject, setpostobject] = useState({});

  //9.2
  useEffect(() => {
    axios.get(`http://localhost:3001/posts/byid/${id}`).then((response) => {
        setpostobject(response.data);
    });
  })

  return (
    <div className="postPage">
      <div className="leftSide">
        <div className="post" id="individual">
          <div className="title"> {postobject.title} </div>
          <div className="body">{postobject.posttext}</div>
          <div className="footer">{postobject.username}</div>
        </div>
      </div>
      <div className="rightSide">Comment Section</div>
    </div>
  );
}

export default Post