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
        <Link className="navbar-brand" to="/">Volunteer Connection</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav mb-2 mb-lg-0 justify-content-end">
          <li className="nav-item">
              <NavLink className="nav-link" to="/companies">
                Companies
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/user-connections">
                Connections
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/profile-user">
                Profile
              </NavLink>
            </li>
            <li className="nav-item">
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
        <Link className="navbar-brand" to="/">Volunteer Connection</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav mb-2 mb-lg-0 justify-content-end">
            <li className="nav-item">
              <NavLink className="nav-link" to="/company-connections">
                Connections
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/profile-company">
                Profile
              </NavLink>
            </li>
            <li className="nav-item">
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
        <Link className="navbar-brand" to="/">Volunteer Connection</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav mb-2 mb-lg-0 justify-content-end">
            <li className="nav-item">
              <NavLink className="nav-link" to="/companies">
                Companies
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Login
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <NavLink className="nav-link" to="/login-user">
                    User Login
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link" to="/login-company">
                    Company Login
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Signup
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <NavLink className="nav-link" to="/signup-user">
                    Signup as a User
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link" to="/signup-company">
                    Signup as a Company
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark Navigation">
      {currentUser ? loggedInUserNav() : currentCompany ? loggedInCompanyNav() : loggedOutNav()}
    </nav>
  );
}

export default Navigation;