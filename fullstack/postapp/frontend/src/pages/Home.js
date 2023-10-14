// 7. react routes
// type rfce + enter to get boiler plate

import React from "react";
import axios from "axios";
import { useEffect, useState } from "react"; //logic to allow reload a func at page load
import { useNavigate } from "react-router-dom";

function Home() {
  const [listofposts, setlistofposts] = useState([]);
  //9.2 
  let navigate = useNavigate();

  // 5.2 add code to extract posts from db using axios
  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      setlistofposts(response.data);
    });
  }, []);

  return (
    <div>
      {
        // 6.1 add code to display posts from database
        listofposts.map((value, key) => {
          return (
            //9.2 onClick
            <div
              className="post"
              onClick={() => {
                navigate(`/post/${value.id}`);
              }}
            >
              <div className="title"> {value.title} </div>
              <div className="body"> {value.posttext} </div>
              <div className="footer"> {value.username} </div>
            </div>
          );
        })
      }
    </div>
  );
}

export default Home;
