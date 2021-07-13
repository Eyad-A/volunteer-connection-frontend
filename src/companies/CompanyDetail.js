import React, { useEffect, useState } from "react";
import VolunteerApi from "../api/api";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../common/LoadingSpinner";

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

  useEffect(function getCompanyDetail() {
    async function getCompany() {
      setCompany(await VolunteerApi.getCurrentCompany(companyHandle));
    }
    getCompany();
  }, [companyHandle]);

  if (!company) return <LoadingSpinner />;

  React.useEffect(function updateConnectedStatus() {
    setConnected(hasConnectedToCompany(id));
  }, [id, hasConnectedToCompany]);

  async function handleConnect(evt) {
    if (hasConnectedToCompany(id)) return;
    connectToCompany(id);
    setConnected(true);
  }

  if (currentUser) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
  
          </div>
          <div className="col-lg-10 my-4">
            <h1 className="my-2">{company.companyName}</h1>
            <h4 className="my-3">{company.country}</h4>          
            <button className="btn btn-primary my-3 font-weight-bold text-uppercase float-right" onClick={handleConnect} disabled={connected}>Connect</button>
            <p>{company.numEmployees}</p>
            <p>{company.shortDescription}</p>
            <p>{company.longDescription}</p>
            <p>{company.lookingFor}</p>
            <p><a href={company.websiteUrl}>VISIT OUR WEBSITE</a></p>
            <p><img alt="company logo" src={company.logoUrl} /></p>
            <p><img alt="company banner" src={company.mainImageUrl} /></p>
          </div>
          <div className="col-lg-2">
  
          </div>
        </div>
      </div>
    );    
  } else {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
  
          </div>
          <div className="col-lg-10 my-4">
            <h1 className="my-2">{company.companyName}</h1>
            <h4 className="my-3">{company.country}</h4>          
            <a href="/login-user"><button className="btn btn-primary my-3 font-weight-bold text-uppercase float-right">Login to Connect</button></a>
            <p>{company.numEmployees}</p>
            <p>{company.shortDescription}</p>
            <p>{company.longDescription}</p>
            <p>{company.lookingFor}</p>
            <p><a href={company.websiteUrl}>VISIT OUR WEBSITE</a></p>
            <p><img alt="company logo" src={company.logoUrl} /></p>
            <p><img alt="company banner" src={company.mainImageUrl} /></p>
          </div>
          <div className="col-lg-2">
  
          </div>
        </div>
      </div>
    );
  }  
}

export default CompanyDetail;