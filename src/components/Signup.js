import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Link } from 'react-router-dom';

const CREATE_USER = gql`
mutation CreateUser($name: String! , $email: String!, $password: String!){    
    createUser(name:$name, email:$email, password:$password){
        id
    }
}
`;

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",    
    message: false,
    success: false
  });
  const [createUser, { loading, error }] = useMutation(CREATE_USER);

  const { name, email, password, password2, message, success } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, message: false, success: false, [name]: event.target.value });      
  };

  const clickSubmit = (event) => {
    event.preventDefault();    
    if(password !== password2){
        setValues({ ...values, message: "Passwords do not match!", success: false })
        return
    }
    createUser({ variables: { name, email, password }})
        .then(( { data } ) => {
            setValues({ 
                message: false, 
                success: true,
                name: "",
                email: "",
                password: "",
                password2: "" 
            })
        })
        .catch(e => {
            console.log(e.Error)            
        })
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-6">
          <form
            className="d-flex flex-column justify-content-md-center p-5 bg-white"
            onSubmit={clickSubmit}
          >
            <h3 className="display-4 text-muted mb-4">Join The Community</h3>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Name"
                value={name}
                onChange={handleChange("name")}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Email"
                value={email}
                onChange={handleChange("email")}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="InputPassword"
                placeholder="Password"
                value={password}
                onChange={handleChange("password")}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="InputPassword2"
                placeholder="Confirm Password"
                value={password2}
                onChange={handleChange("password2")}
                required
              />
            </div>
            <p>Already have an account? Please <Link to='/signin' className="text-decoration-none">Sign In</Link></p>
            <button type="submit" disabled={loading} className="btn btn-primary">
              Sign Up
            </button>
            {error && error.message.includes('dup key') && <p className="mt-3 alert alert-danger">Email already registered!</p>}
            {message && <p className="mt-3 alert alert-danger">{message}</p>}
            {success && <p className="mt-3 alert alert-dark">Sign up successful. Please <Link to='/signin' className="btn btn-outline-dark">Sign In</Link></p>}
          </form>
        </div>
        <div className="col-md-6 bg-white">
            <img src="images/signup.jpg" id="signupImage" className="img-fluid mt-3" alt=""/>            
            <p className="text-muted mt-3 mx-3">We are a growing community of like-minded people who shares their knowledge for other's benefit. </p>
            <p className="text-muted mt-3 mx-3">Be part of something great and we look forward to connect with you!</p>
        </div>        
      </div>
    </div>
  );
};

export default Signup;
