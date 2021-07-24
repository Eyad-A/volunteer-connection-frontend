import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../auth/UserContext";
import "./Homepage.css";

/**
 * Home page
 * Shows a welcome page and a login/signup buttons
 * Routed at /Routes > Homepage 
 */

function Homepage() {

  const { currentUser, currentCompany } = useContext(UserContext);

  return (
    <div>
      <section className="bgimage">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 hero-text">
              <h1>Volunteer Connection</h1>
              <h4>Connecting freelancers and nonprofit companies</h4>
              {currentUser ?
                <h4>Welcome back, {currentUser.username}</h4>
                : currentCompany ?
                  <h4>Welcome back, {currentCompany.companyHandle}</h4>
                  : (
                    <p>
                      <Link className="btn btn-warning btn-lg font-weight-bold mx-2 my-2" to="/signup-company">
                        For nonprofits
                      </Link>
                      <Link className="btn btn-warning btn-lg font-weight-bold mx-2 my-2" to="/signup-user">
                        For freelancers
                      </Link>
                    </p>
                  )
              }
            </div>
          </div>
        </div>
      </section>      
    </div>
  );
}

export default Homepage;