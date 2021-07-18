import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../auth/UserContext";
import "./Homepage.css";
import hero from "../connection.png";

/**
 * Home page
 * Shows a welcome page and a login/signup buttons
 * Routed at /Routes > Homepage 
 */

function Homepage() {

  const { currentUser } = useContext(UserContext);

  return (
    <div className="homepage">
      <div className="container text-center">
        <img src={hero} alt="Man applying for jobs" className="heroimage" />
        <h1 className="mb-4 font-weight-bold">Volunteer Connection</h1>
        <h5 className="lead">Connecting freelancers and nonprofit companies</h5>
        {currentUser ? 
          <h3>Welcome back, {currentUser.username || currentUser.companyHandle}</h3>
          : (
            <p>
              <Link className="btn btn-primary btn-lg font-weight-bold mx-2 my-2" to="/login">
                Login 
              </Link>
              <Link className="btn btn-primary btn-lg font-weight-bold mx-2 my-2" to="/signup">
                Signup 
              </Link>
            </p>
          )
        }
      </div>
    </div>
  );
}

export default Homepage;