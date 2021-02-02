import React, { useReducer, useEffect } from "react";
import authReducer from "../reducers/auth.js";
import jwt from "jsonwebtoken";

export const Context = React.createContext();

const ContextProvider = (props) => {
  const cachedToken = localStorage.getItem("token");
  const [auth, authDispatch] = useReducer(authReducer, "");

  useEffect(() => {
    authDispatch({
      type: "LOGIN",
      token: cachedToken,
    });
  }, [cachedToken]);

  return (
    <Context.Provider value={{ auth, authDispatch }}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
