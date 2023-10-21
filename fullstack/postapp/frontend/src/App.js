import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/Post";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

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

// 12.6 create login page in front-end
// 12.7 create signup page in front end
// 12.8 create link for login and registering

function App() {
  return (
    <div className="App">
      <Router>
        <div className="navbar">
          <Link to="/">Home</Link>
          <Link to="/createpost">Create A Post</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/createpost" exact Component={CreatePost} />
          <Route path="/post/:id" exact Component={Post} />
          <Route path="/login" exact Component={Login} />
          <Route path="/signup" exact Component={Signup} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
