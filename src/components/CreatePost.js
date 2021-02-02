import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

const CreatePost = () => {
  const [values, setValues] = useState({
    title: "",
    tags: "",
    slug: "",
    body: "",
    message: false,
    success: false,
  });

  const { title, tags, slug, body, message, success } = values;

  const handleChange = (name) => (event) => {
    setValues({
      ...values,
      message: false,
      success: false,
      [name]: event.target.value,
    });
  };
  const handleEditorChange = (content, editor) => {
    console.log("Content was updated:", content);
    setValues({...values, body: content})
  };
  return (
    <div className="container">
      <div className="row my-3">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <form className="d-flex flex-column justify-content-md-center p-5 bg-white">
            <h3 className="display-4 text-muted mb-4">
              New Post
            </h3>
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
          </form>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
};

export default CreatePost;
