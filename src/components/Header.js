import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../context/context";
import { signOutUser } from "../helpers/authenticationServices";

const Header = () => {
  const { auth, authDispatch } = useContext(Context);
  let history = useHistory();

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white px-5 py-2">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link
          to="/"
          className="navbar-brand bg-dark text-white px-2 font-weight-bold"
        >
          DEV
        </Link>
        <input
          type="text"
          className="d-none d-md-block form-control w-25 bg-light"
          placeholder="Search..."
        />

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mr-3">
            {!auth.token ? (
              <>
                <li className="nav-item">
                  <Link
                    to="/signin"
                    className="nav-link text-primary ml-auto mr-3 curved-radius"
                  >
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/signup"
                    className="nav-link text-primary blue-bg curved-radius"
                  >
                    Create account
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link
                    to="/createpost"
                    className="nav-link text-primary ml-auto mr-3 blue-bg curved-radius"
                  >
                    Create Post
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    href="/"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <img
                      src="images/myImage.jpg"
                      alt=""
                      className="img-fluid rounded-circle"
                      style={{ width: "30px", height: "30px" }}
                    />
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <span
                      className="dropdown-item"
                      onClick={(e) => {
                        e.preventDefault();
                        signOutUser();
                        authDispatch({
                          type: "LOGOUT",
                        });
                        history.push("/signin");
                      }}
                    >
                      Logout
                    </span>
                  </div>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
