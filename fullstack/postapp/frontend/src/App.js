import './App.css';
import axios from "axios";
import { useEffect, useState } from "react"; //logic to allow reload a func at page load

// add basic bare minimum code
  // go to front-end and type npx create-react-app .
  // delete unneccessary files and type npm start
  // npm install axios (alternate to fetch)

// 5. connect backend to frontend
  // navigate to backend dir and install cors
  // 5.1 add code to white list and connect FE
  // npm install axios
  // 5.2 add code to extract posts from db using axios

// 6. react front-end coding
  // 6.1 add code to display posts from database

function App() {

  const [listofposts, setlistofposts] = useState([]);

   // 5.2
  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      setlistofposts(response.data);
    });
  }, []);

  return (
  <div className="App"> {
    
    // 6.1
    listofposts.map((value, key) => { return (
    <div className="post"> 
      <div className="title"> {value.title} </div>
      <div className="body"> {value.posttext} </div>
      <div className="footer"> {value.username} </div>
    </div>);
  }

  )} 
  </div>
  );
}


export default App;
