import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Alert from "../common/Alert";

/**
 * Company signup form 
 * Shows a sign up form
 * Routed at /signup-company 
 */

function CompanySignupForm({ signupCompany }) {

  const [formData, setFormData] = useState({
    companyHandle: "",
    password: "",
    companyName: "",
    state: "",
    numEmployees: 0,
    shortDescription: "",
    longDescription: "",
    websiteUrl: "",
    logoUrl: "",
    mainImageUrl: "",
    lookingFor: "",
  });
  const [formErrors, setFormErrors] = useState([]);
  const history = useHistory();

  // Handle submit 
  async function handleSubmit(evt) {
    evt.preventDefault();
    let results = await signupCompany(formData);
    if (results.success) {
      history.push("/");
    } else {
      setFormErrors(results.errors);
    }
  }

  // Handle change
  // function handleChange(evt) {
  //   const { name, value } = evt.target;
  //   setFormData(data => ({ ...data, [name]: value }));
  // }

  function handleChange(evt) {
    const { name, value, type } = evt.target;
    setFormData(data => ({ ...data, [name]: type === 'number' ? parseInt(value) : value }));
  }

  // this.setState({
  //   [e.target.name]: e.target.type === 'number' ? parseInt(e.target.value) : e.target.value
  // });
  

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-2">

        </div>
        <div className="col-lg-10">
          <h1>Company Signup Form</h1>
          <div className="my-3">
            <form onSubmit={handleSubmit}>
              <div className="col-lg-9 my-2">
                <input
                  name="companyHandle"
                  className="form-control"
                  placeholder="Company Handle"
                  value={formData.companyHandle}
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
                  name="companyName"
                  className="form-control"
                  placeholder="Company name"
                  value={formData.companyName}
                  onChange={handleChange}
                />
              </div>
              <div className="col-lg-9 my-2">
                <input
                  name="state"
                  className="form-control"
                  placeholder="state"
                  value={formData.state}
                  onChange={handleChange}
                />
              </div>
              <div className="col-lg-9 my-2">
                <input
                  name="numEmployees"
                  type="number"
                  className="form-control"
                  placeholder="Number of employees"                  
                  value={formData.numEmployees}
                  onChange={handleChange}
                />
              </div>
              <div className="col-lg-9 my-2">
                <input
                  name="shortDescription"
                  className="form-control"
                  placeholder="Short Description"                  
                  value={formData.shortDescription}
                  onChange={handleChange}
                />
              </div>
              <div className="col-lg-9 my-2">
                <input
                  name="longDescription"
                  className="form-control"
                  placeholder="Long Description"
                  value={formData.longDescription}
                  onChange={handleChange}
                />
              </div>
              <div className="col-lg-9 my-2">
                <input
                  name="websiteUrl"
                  className="form-control"
                  placeholder="Website URL"
                  value={formData.websiteUrl}
                  onChange={handleChange}
                />
              </div>
              <div className="col-lg-9 my-2">
                <input
                  name="logoUrl"
                  className="form-control"
                  placeholder="Logo URL"
                  value={formData.logoUrl}
                  onChange={handleChange}
                />
              </div>
              <div className="col-lg-9 my-2">
                <input
                  name="mainImageUrl"
                  className="form-control"
                  placeholder="Main image URL"
                  value={formData.mainImageUrl}
                  onChange={handleChange}
                />
              </div>
              <div className="col-lg-9 my-2">
                <input
                  name="lookingFor"
                  className="form-control"
                  placeholder="Looking for?"                  
                  value={formData.lookingFor}
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

export default CompanySignupForm;