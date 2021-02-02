import React, { useState } from "react";
import { useApolloClient } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Link, useHistory } from "react-router-dom";


const LOGIN_USER = gql`
  query loginUser($email: String!, $password: String!){
    login(email: $email, password: $password) {
      token
    }
  }
`;

const Signin = () => {
  let history = useHistory()
  const client = useApolloClient();
  const [values, setValues] = useState({
    email: "",
    password: "",
    message: false,
    success: false,
  });

  const { email, password, message, success } = values;

  const handleChange = (name) => (event) => {
    setValues({
      ...values,
      message: false,
      success: false,
      [name]: event.target.value,
    });
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-6">
          <form className="d-flex flex-column justify-content-md-center p-5 bg-white">
            <h3 className="display-4 text-muted mb-4">
              Welcome to the community
            </h3>
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
            <button type="submit" className="btn btn-primary mb-5"
                onClick={async (event) => {
                    event.preventDefault()
                    try{
                        const response = await client.query({
                            query: LOGIN_USER,
                            variables: { email, password }
                        })
                        localStorage.setItem('token',response.data.login.token)
                        history.push('/')
                    }
                    catch(e){
                        console.log(e)
                        setValues({...values, message: "Username or password is wrong."})
                    }
                }}
            >
              Sign In
            </button>
            {message && <p className="mt-3 alert alert-danger">{message}</p>}
            {success && (
              <p className="mt-3 alert alert-dark">
                Sign up successful. Please
                <Link to="/signin" className="btn btn-outline-dark">
                  Sign In
                </Link>
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;