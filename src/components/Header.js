import React from "react";
import { Link } from 'react-router-dom'

const Header = () => {    

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white px-5 py-2">
      <div className="d-flex w-100">
        <Link
          to="/"
          className="navbar-brand bg-dark text-white p-1 ml-5 font-weight-bold"
        >
          DEV
        </Link>
        <input
          type="text"
          className="form-control w-25 bg-light"
          placeholder="Search..."
        />
        <Link
          to='/signin'
          className="btn btn-outline-light text-primary ml-auto mr-3"          
        >
          Login
        </Link>
        <Link
          to='/signup'
          className="btn btn-primary text-white mr-5"          
        >
          Create account
        </Link>
      </div>
    </nav>
  );
};

export default Header