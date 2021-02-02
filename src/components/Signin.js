import React, { useState, useContext } from "react";
import { useApolloClient } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { useHistory, useLocation } from "react-router-dom";
import { Context } from '../context/context'


const LOGIN_USER = gql`
  query loginUser($email: String!, $password: String!){
    login(email: $email, password: $password) {
      token
    }
  }
`;

const Signin = () => {
  
  const { authDispatch } = useContext(Context)
  let history = useHistory()   
  let location = useLocation()
  const client = useApolloClient();

  const [values, setValues] = useState({
    email: "",
    password: "",
    message: false,    
  });

  const { email, password, message } = values;

  const handleChange = (name) => (event) => {
    setValues({
      ...values,
      message: false,
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
                        console.log("inside click function")                        
                        const response = await client.query({
                            query: LOGIN_USER,
                            variables: { email, password },
                            fetchPolicy: 'no-cache'
                        })
                        console.log(response)
                        localStorage.setItem('token',response.data.login.token)
                        authDispatch({
                          type: 'LOGIN',
                          token: response.data.login.token
                      })
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
            {location.state && location.state.params === 'expired' && <p className="mt-3 alert alert-danger">Your session expired. Please login again.</p>}          
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
