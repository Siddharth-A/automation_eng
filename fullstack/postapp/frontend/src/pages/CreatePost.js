import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

// 8. Form validation
// npm install formik for form submission
// the name in Field needs to be the same as it is in the database
// 8.1 add initial values, onSubmit & validationSchema needed by formik
// npm install yup - used for form validation
// 8.2 connect to the backend and submit posts

function CreatePost() {
  // 8.1
  const initialValues = {
    title: "",
    posttext: "",
    username: "",
  };

  // 8.1
  const onSubmit = (data) => {
    // 8.2
    axios.post("http://localhost:3001/posts", data).then((response) =>{
        console.log("post submitted to database");
    });
    console.log(data);
  };

//   8.1
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Please add a title for your post"),
    posttext: Yup.string().required(),
    username: Yup.string().min(3).max(10).required(),
  });

  return (
    <div className="createPostPage">
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {/* <Formik> */}
        <Form className="formContainer">
          <label>Title: </label>
          <ErrorMessage name="title" component="span" />
          <Field id="inputCreatePost" name="title" placeholder="title.." />

          <label>Post: </label>
          <ErrorMessage name="posttext" component="span" />
          <Field id="inputCreatePost" name="posttext" placeholder="post.." />

          <label>Username: </label>
          <ErrorMessage name="username" component="span" />
          <Field
            id="inputCreatePost"
            name="username"
            placeholder="username.."
          />

          <button type="submit"> Create Post</button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreatePost;
