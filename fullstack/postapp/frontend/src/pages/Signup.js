// 12.7 create signup page in front end (copy-paste from CreatePost.js)

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  let navigate = useNavigate();

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().min(3).max(10).required(),
    password: Yup.string().min(3).max(20).required(),
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/auth", data).then((response) =>{
        console.log("user submitted to database");
        navigate("/Login");
    });
  };

  return (
    <div className="createPostPage">
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>

        {/* <Formik> */}
        <Form className="formContainer">
          <label>Username: </label>
          <ErrorMessage name="username" component="span" />
          <Field id="inputCreatePost" name="username" placeholder="username.."/>

          <label>Password: </label>
          <ErrorMessage name="password" component="span" />
          <Field id="inputCreatePost" type="password" name="password" placeholder="password.."/>

          <button type="submit"> Sign Up!</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Signup;
