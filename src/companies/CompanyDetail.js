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

  useEffect(function getCompanyDetail() {
    async function getCompany() {
      setCompany(await VolunteerApi.getCompany(companyHandle));
    }
    getCompany();
  }, [companyHandle]);

  if (!company) return <LoadingSpinner />;

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-2">

        </div>
        <div className="col-lg-10 my-4">
          <h1 className="my-2">{company.companyName}</h1>
          <h4 className="my-3">{company.country}</h4>
          <h4 className="my-3">CONNECT BUTTON GOES HERE</h4>
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

export default CompanyDetail;