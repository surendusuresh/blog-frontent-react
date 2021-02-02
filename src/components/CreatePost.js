import React, { useState, useEffect, useContext } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { useHistory } from "react-router-dom";
import jwt from "jsonwebtoken";
import { Context } from "../context/context";

const CREATE_POST = gql`
  mutation CreatePost(
    $title: String!
    $tags: String!
    $body: String!
    $slug: String!
    $image: String
  ) {
    createPost(
      title: $title
      tags: $tags
      body: $body
      slug: $slug
      image: $image
    ) {
      id
    }
  }
`;

const CreatePost = () => {
  let history = useHistory();
  const { authDispatch } = useContext(Context);
  useEffect(() => {
    let token = localStorage.getItem("token");
    let decodedToken = jwt.decode(token, { complete: true });
    let dateNow = new Date();
    if (decodedToken.payload.exp * 1000 < dateNow.getTime()) {
      authDispatch({
        type: "LOGOUT",
      });
      localStorage.removeItem("token");
      history.push("/signin", { params: "expired" });
    }
  }, [authDispatch, history]);
  const [createPost] = useMutation(CREATE_POST);
  const [values, setValues] = useState({
    title: "",
    tags: "",
    slug: "",
    body: "",
    image: "",
    message: false,
  });

  const { title, tags, slug, body, image, message } = values;

  const handleChange = (name) => (event) => {
    setValues({
      ...values,
      message: false,
      [name]: event.target.value,
    });
  };
  const handleEditorChange = (content, editor) => {
    setValues({ ...values, body: content });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    createPost({ variables: { title, body, tags, slug, image } })
      .then(({ data }) => {
        setValues({
          message: false,
          title: "",
          body: "",
          slug: "",
          tags: "",
          image: "",
        });
        history.push("/");
      })
      .catch((e) => {        
        authDispatch({
          type: "LOGOUT",
        });
        localStorage.removeItem("token");
        history.push("/signin", { params: "expired" });        
      });
  };

  return (
    <div className="container">
      <div className="row my-3">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <form
            className="d-flex flex-column justify-content-md-center p-5 bg-white"
            onSubmit={clickSubmit}
          >
            <h3 className="display-4 text-muted mb-4">New Post</h3>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Post Title"
                value={title}
                onChange={handleChange("title")}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="tags"
                value={tags}
                onChange={handleChange("tags")}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="slug"
                value={slug}
                onChange={handleChange("slug")}
                required
              />
            </div>
            <div className="form-group">
              <Editor
                apiKey="yxjuumzqq25sjzy3lslivim4mxvuz5kycqwcv4je13xsgmh6"
                initialValue=""
                init={{
                  height: 500,
                  menubar: false,
                  plugins: [
                    "advlist autolink lists link image charmap print preview anchor",
                    "searchreplace visualblocks code fullscreen",
                    "insertdatetime media table paste code help wordcount",
                  ],
                  toolbar:
                    "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
                }}
                onEditorChange={handleEditorChange}
              />
            </div>
            <button type="submit" className="btn btn-primary mb-5">
              Submit
            </button>
            {message && <p className="mt-3 alert alert-danger">{message}</p>}
          </form>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
};

export default CreatePost;
