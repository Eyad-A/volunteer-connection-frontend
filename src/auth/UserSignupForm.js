import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Alert from "../common/Alert";

/**
 * User signup form 
 * Shows a sign up form
 * Routed at /signup-user 
 */

function UserSignupForm({ signupUser }) {

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    skill: "",
  });
  const [formErrors, setFormErrors] = useState([]);
  const history = useHistory();

  // Handle submit 
  async function handleSubmit(evt) {
    evt.preventDefault();
    let results = await signupUser(formData);
    if (results.success) {
      history.push("/");
    } else {
      setFormErrors(results.err);
      history.push("/");
    }
  }

  // Handle change
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(data => ({ ...data, [name]: value }));
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-2">

        </div>
        <div className="col-lg-10">
          <h1>User Signup Form</h1>
          <div className="my-3">
            <form onSubmit={handleSubmit}>
              <div className="col-lg-9 my-2">
                <input
                  name="username"
                  className="form-control"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              <div className="col-lg-9 my-2">
                <input
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div className="col-lg-9 my-2">
                <input
                  name="firstName"
                  className="form-control"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="col-lg-9 my-2">
                <input
                  name="lastName"
                  className="form-control"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="col-lg-9 my-2">
                <input
                  name="email"
                  className="form-control"
                  placeholder="Email address"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="col-lg-9 my-2">
                <input
                  name="skill"
                  className="form-control"
                  placeholder="Skill"                  
                  value={formData.skill}
                  onChange={handleChange}
                />
              </div>

              {formErrors.length
                ? <Alert type="danger" message={formErrors} />
                : null
              }

              <button className="btn btn-lg btn-primary my-3">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="col-lg-2">

        </div>
      </div>


    </div>
  );
}

export default UserSignupForm;