import React, { useEffect, useState, useContext } from "react";
import UserContext from "../auth/UserContext";
import VolunteerApi from "../api/api";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../common/LoadingSpinner";
import "./CompanyDetail.css";

/**
 * Company Detail 
 * Will list details of one company 
 * Routed at /companies/:companyHandle 
 */

function CompanyDetail() {
  const { companyHandle } = useParams();
  const [company, setCompany] = useState(null);

  const { currentUser, hasConnectedToCompany, connectToCompany } = useContext(UserContext);
  const [connected, setConnected] = useState();
  const [formErrors, setFormErrors] = useState([]);


  React.useEffect(function updateConnectedStatus() {
    setConnected(hasConnectedToCompany(companyHandle));
  }, [companyHandle, hasConnectedToCompany]);


  // React.useEffect(function updateConnectedStatus() {
  //   if (currentUser.connections.includes(companyHandle)) {
  //     setConnected(true);
  //   }
  // }, [currentUser.connections, companyHandle]);


  useEffect(function getCompanyDetail() {
    async function getCompany() {
      setCompany(await VolunteerApi.getCurrentCompany(companyHandle));
    }
    getCompany();
  }, [companyHandle]);

  if (!company) return <LoadingSpinner />;

  async function handleConnect(evt) {
    if (hasConnectedToCompany(companyHandle)) return;
    connectToCompany(companyHandle);
    setConnected(true);

    let connectUserInDb;
    try {
      connectUserInDb = await VolunteerApi.connectToCompany(currentUser.username, companyHandle);
    } catch (err) {
      setFormErrors(err);
      return;
    }
  }

  if (currentUser) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-1">

          </div>
          <div className="col-lg-10 my-4">
            {company.mainImageUrl && <img src={company.mainImageUrl} alt={company.companyName} className="banner" />}
            <h1 className="mt-4">{company.companyName} {company.logoUrl && <img src={company.logoUrl} alt={company.companyName} className="mx-2" />}</h1>
            
            <p>
              <button className="btn btn-primary my-3 font-weight-bold text-uppercase float-right" onClick={handleConnect} disabled={connected}> {connected ? "Connected" : "Connect"} </button>
              <a target="_blank" href={company.websiteUrl}><button className="btn btn-warning my-2 mx-2 font-weight-bold text-uppercase">Visit our website</button></a>
            </p>
            <h4 className="my-3">{company.state} | {company.numEmployees} employees</h4>
            <p>Looking for: {company.lookingFor}</p>
            <p>{company.shortDescription}</p>
            <p>{company.longDescription}</p>
          </div>
          <div className="col-lg-1">

          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-1">

          </div>
          <div className="col-lg-10 my-4">
            {company.mainImageUrl && <img src={company.mainImageUrl} alt={company.companyName} className="banner" />}
            <h1 className="mt-4">{company.companyName} {company.logoUrl && <img src={company.logoUrl} alt={company.companyName} className="mx-2" />}</h1>
            <p>
              <a href="/login-user"><button className="btn btn-warning my-2 me-2 font-weight-bold text-uppercase float-right">Login to Connect</button></a>
              <a target="_blank" href={company.websiteUrl}><button className="btn btn-warning my-2 mx-2 font-weight-bold text-uppercase">Visit our website</button></a>
            </p>
            <h4 className="my-3">{company.state} | {company.numEmployees} employees</h4>
            <p>Looking for: {company.lookingFor}</p>
            <p>{company.shortDescription}</p>
            <p>{company.longDescription}</p>
          </div>
          <div className="col-lg-1">

          </div>
        </div>
      </div>
    );
  }
}

export default CompanyDetail;

