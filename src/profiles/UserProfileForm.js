import React, { useState, useContext } from "react";
import UserContext from "../auth/UserContext";
import VolunteerApi from "../api/api";
import Alert from "../common/Alert";

/**
 * User Profile Form 
 * Renders a form to edit the user's profile 
 * Routed at /profile 
 */

function UserProfileForm() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
    skill: currentUser.skill,
    username: currentUser.username,
    password: "",
  });
  const [formErrors, setFormErrors] = useState([]);
  const [saveConfirmed, setSaveConfirmed] = useState(false);

  const connections = currentUser.connections;

  // Handle form submit 
  async function handleSubmit(evt) {
    evt.preventDefault();

    let profileData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      skill: formData.skill,
      password: formData.password,
    };

    let username = formData.username;
    let updatedUser;

    try {
      updatedUser = await VolunteerApi.saveUserProfile(username, profileData);
    } catch (err) {
      setFormErrors(err);
      return;
    }

    setFormData(f => ({ ...f, password: "" }));
    setFormErrors([]);
    setSaveConfirmed(true);

    setCurrentUser(updatedUser);
  }

  // Handle form change 
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(f => ({
      ...f,
      [name]: value,
    }));
    setFormErrors([]);
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-2">

        </div>
        <div className="col-lg-10">
          <h1>User Profile Form</h1>
          <div className="my-3">
            <form>
              <div className="col-lg-12 my-2">
                <label>Username</label>               
                <p>{formData.username}</p>
              </div>
              <div className="col-lg-12 my-2">
                <label>First name</label>                
                <input
                  name="firstName"
                  className="form-control"                  
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="col-lg-12 my-2">
                <label>Last name</label>            
                <input
                  name="lastName"
                  className="form-control"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="col-lg-12 my-2">
                <label>Skill</label>
                <input
                  name="skill"
                  className="form-control"
                  value={formData.skill}
                  onChange={handleChange}
                />
              </div>
              <div className="col-lg-12 my-2">
                <label>Email</label>
                <input
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="col-lg-12 my-2">
                <label>Confirm password to make changes</label>
                <input
                  name="password"
                  className="form-control"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              {formErrors.length ?
                <Alert type="danger" message={formErrors} />
                : null
              }

              {saveConfirmed ?
                <Alert type="success" messages={["Update successful"]} />
                : null
              }

              <button className="btn btn-lg btn-primary my-3" onClick={handleSubmit}>
                Save
              </button>
            </form>
          </div>
        </div>
        <div className="col-lg-2">

        </div>
      </div>

      <div>{connections}</div>

    </div>
  );
}

export default UserProfileForm;