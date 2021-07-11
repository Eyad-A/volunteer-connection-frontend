import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Alert from "../common/Alert";

/** User login form
 * Shows a login form 
 * Routed at /login 
 */

function UserLoginForm({ loginUser }) {

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState([]);
  const history = useHistory();

  // Handle form submission 
  async function handleSubmit(evt) {
    evt.preventDefault();
    let results = await loginUser(formData);
    if (results.success) {
      history.push("/companies");
    } else {
      setFormErrors(results.errors);
    }
  }

  // Handle change function 
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(d => ({ ...d, [name]: value }));
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-2">

        </div>
        <div className="col-lg-10">
          <h1>User Login Form</h1>
          <div className="my-3">
            <form onSubmit={handleSubmit}>
              <div className="col-lg-9 my-2">
                <input
                  name="username"
                  className="form-control"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                  required
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
                  required
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

export default UserLoginForm;