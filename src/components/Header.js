import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../context/context";

const Header = () => {
  const { auth, authDispatch } = useContext(Context);
  let history = useHistory()

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
        {!auth.token ? (
          <div className="ml-auto mr-3">
            <Link
              to="/signin"
              className="btn btn-outline-light text-primary ml-auto mr-3"
            >
              Login
            </Link>
            <Link to="/signup" className="btn btn-primary text-white mr-5">
              Create account
            </Link>
          </div>
        ) : (
          <div className="ml-auto mr-3">
            <Link
              to="/createpost"
              className="btn btn-primary text-white ml-auto mr-3"
            >
              Create Post
            </Link>
            <button
              className="btn btn-primary text-white mr-5"
              onClick={(e) => {
                e.preventDefault();
                localStorage.removeItem("token");
                authDispatch({
                  type: "LOGOUT",
                });
                history.push('/signin')
              }}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
