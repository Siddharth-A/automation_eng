import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";

// add basic bare minimum code
// go to front-end and type npx create-react-app .
// delete unneccessary files and type npm start
// npm install axios (alternate to fetch)

// 5. connect backend to frontend
// navigate to backend dir and install cors
// 5.1 add code to white list and connect FE
// npm install axios
// 5.2 add code to get posts from db using axios

// 6. react front-end coding
// 6.1 add code to display posts from database

// 7. react routes
// npm install react-router-dom
// mkdir pages
// create Home.js

// axios              get/post to backend from frontend
// react-router-dom   connect pages to main App.js
// formik             form creation
// yup                form validation 


function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/createpost">Create A Post</Link>
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/createpost" exact Component={CreatePost} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
