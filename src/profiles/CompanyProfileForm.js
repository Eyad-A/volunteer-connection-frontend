import React, { useState, useContext } from "react";
import UserContext from "../auth/UserContext";
import VolunteerApi from "../api/api";
import Alert from "../common/Alert";

/**
 * Company Profile Form 
 * Renders a form to edit the user's profile 
 * Routed at /profile 
 */

function CompanyProfileForm() {
  const { currentCompany, setCurrentCompany } = useContext(UserContext);
  const [formData, setFormData] = useState({
    companyName: currentCompany.companyName,
    state: currentCompany.state,
    numEmployees: currentCompany.numEmployees,
    shortDescription: currentCompany.shortDescription,
    longDescription: currentCompany.longDescription,
    websiteUrl: currentCompany.websiteUrl,
    logoUrl: currentCompany.logoUrl,
    mainImageUrl: currentCompany.mainImageUrl,
    lookingFor: currentCompany.lookingFor,
    companyHandle: currentCompany.companyHandle,
    password: "",
  });
  const [formErrors, setFormErrors] = useState([]);
  const [saveConfirmed, setSaveConfirmed] = useState(false);

  // Handle form submit 
  async function handleSubmit(evt) {
    evt.preventDefault();

    let profileData = {
      companyName: formData.companyName,
      state: formData.state,
      numEmployees: formData.numEmployees,
      shortDescription: formData.shortDescription,
      longDescription: formData.longDescription,
      websiteUrl: formData.websiteUrl,
      logoUrl: formData.logoUrl,
      mainImageUrl: formData.mainImageUrl,
      lookingFor: formData.lookingFor,
      password: formData.password,
    };

    let companyHandle = formData.companyHandle;
    let updatedCompany;

    try {
      updatedCompany = await VolunteerApi.saveCompanyProfile(companyHandle, profileData);
    } catch (err) {
      setFormErrors(err);
      return;
    }

    setFormData(f => ({ ...f, password: "" }));
    setFormErrors([]);
    setSaveConfirmed(true);

    setCurrentCompany(updatedCompany);
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
          <h1>Company Profile Form</h1>
          <div className="my-3">
            <form>
              <div className="col-lg-12 my-2">
                <label>Company Handle</label>               
                <p>{formData.companyHandle}</p>
              </div>
              <div className="col-lg-12 my-2">
                <label>Company Name</label>
                <input
                  name="companyName"
                  className="form-control"                  
                  value={formData.companyName}
                  onChange={handleChange}
                />
              </div>
              <div className="col-lg-12 my-2">
                <label>State</label>
                <input
                  name="state"
                  className="form-control"                  
                  value={formData.state}
                  onChange={handleChange}
                />
              </div>
              <div className="col-lg-12 my-2">
                <label>Number of employees</label>            
                <input
                  name="numEmployees"
                  className="form-control"
                  value={formData.numEmployees}
                  onChange={handleChange}
                />
              </div>
              <div className="col-lg-12 my-2">
                <label>Short Description</label>
                <input
                  name="shortDescription"
                  className="form-control"
                  value={formData.shortDescription}
                  onChange={handleChange}
                />
              </div>
              <div className="col-lg-12 my-2">
                <label>Long Description</label>
                <input
                  name="longDescription"
                  className="form-control"
                  value={formData.longDescription}
                  onChange={handleChange}
                />
              </div>
              <div className="col-lg-12 my-2">
                <label>website URL</label>
                <input
                  name="websiteUrl"
                  className="form-control"
                  value={formData.websiteUrl}
                  onChange={handleChange}
                />
              </div>
              <div className="col-lg-12 my-2">
                <label>Logo URL</label>
                <input
                  name="logoUrl"
                  className="form-control"
                  value={formData.logoUrl}
                  onChange={handleChange}
                />
              </div>
              <div className="col-lg-12 my-2">
                <label>Main image URL</label>
                <input
                  name="mainImageUrl"
                  className="form-control"
                  value={formData.mainImageUrl}
                  onChange={handleChange}
                />
              </div>
              <div className="col-lg-12 my-2">
                <label>Looking for?</label>
                <input
                  name="lookingFor"
                  className="form-control"
                  value={formData.lookingFor}
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

    </div>
  );
}

export default CompanyProfileForm;