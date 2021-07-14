import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../auth/UserContext";
import "./Navigation.css"

/**
 * Nav bar that shows up on top of every page
 * If the user/company is logged in, will show links to 
 * companies/profile. Otherwise, will show 
 * login/signup links. 
 */

function Navigation({ logout }) {

  const { currentUser } = useContext(UserContext);

  function loggedInNav() {
    return (
      <div className="container-fluid">
        <Link className="navbar-brand link-dark" to="/">
          Volunteer Connection
        </Link>
        <div className="justify-content-end">
          <ul className="navbar-nav ml-auto justify-content-end">
            <li className="nav-item mr-4">
              <NavLink className="nav-link" to="/companies">
                Companies
              </NavLink>
            </li>
            <li className="nav-item mr-4">
              <NavLink className="nav-link" to="/user-connections">
                Connections 
              </NavLink>
            </li>
            <li className="nav-item mr-4">
              <NavLink className="nav-link" to="/profile-user">
                Profile
              </NavLink>
            </li>
            <li className="nav-item mr-4">
              <NavLink className="nav-link" to="/" onClick={logout}>
                Logout
              </NavLink>
            </li>
          </ul>
        </div>

      </div>

    );
  }

  function loggedOutNav() {
    return (
      <div className="container-fluid">
        <Link className="navbar-brand link-dark" to="/">
          Volunteer Connection 
        </Link>
        <div className="justify-content-end">
          <ul className="navbar-nav ml-auto justify-content-end">
            <li className="nav-item mr-4">
              <NavLink className="nav-link" to="/companies">
                Companies
              </NavLink>
            </li>            
            <li className="navbar-item mr-4">
              <NavLink className="nav-link" to="/login-user">
                Login
              </NavLink>
            </li>
            <li className="navbar-item mr-4">
              <NavLink className="nav-link" to="/signup-user">
                Signup
              </NavLink>
            </li>
          </ul>
        </div>

      </div>
    );
  }

  return (
    <nav className="Navigation navbar navbar-expand-md">
      {currentUser ? loggedInNav() : loggedOutNav()}
    </nav>
  );
}

export default Navigation;