// 12.7 create login page in front-end

import React from 'react';
// import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = (data) => {
    data = {username: username, password: password};
    axios.post("http://localhost:3001/auth/login", data).then((response) => {
    
    // 13.2 save web token in local storage session
    if(response.data.error){
        alert(response.data.error);
    }
    else{
        sessionStorage.setItem("accessToken", response.data);
    }
    });
    console.log(data);
    navigate("/");
  };

  return (
    <div className='loginContainer'>
      <label>Username: </label>
      <input type="text" onChange={(event) => { setUsername(event.target.value);}}/>

      <label>Password: </label>
      <input type="password" onChange={(event) => { setPassword(event.target.value);}}/>

      <button type="submit" onClick={login}> Sign In!</button>
    </div>
  );
}

export default Login