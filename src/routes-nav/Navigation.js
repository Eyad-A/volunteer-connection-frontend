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

  const { currentUser, currentCompany } = useContext(UserContext);

  function loggedInUserNav() {
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

  function loggedInCompanyNav() {
    return (
      <div className="container-fluid">
        <Link className="navbar-brand link-dark" to="/">
          Volunteer Connection
        </Link>
        <div className="justify-content-end">
          <ul className="navbar-nav ml-auto justify-content-end">            
            <li className="nav-item mr-4">
              <NavLink className="nav-link" to="/company-connections">
                Connections 
              </NavLink>
            </li>
            <li className="nav-item mr-4">
              <NavLink className="nav-link" to="/profile-company">
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
                User Login
              </NavLink>
            </li>
            <li className="navbar-item mr-4">
              <NavLink className="nav-link" to="/login-company">
                Company Login
              </NavLink>
            </li>
            <li className="navbar-item mr-4">
              <NavLink className="nav-link" to="/signup-user">
                User Signup
              </NavLink>
            </li>
            <li className="navbar-item mr-4">
              <NavLink className="nav-link" to="/signup-company">
                Company Signup
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <nav className="Navigation navbar navbar-expand-md">
      {currentUser ? loggedInUserNav() : currentCompany ? loggedInCompanyNav() : loggedOutNav()} 
    </nav>
  );
}

export default Navigation;