import React from "react";
import { Link } from "react-router-dom";
import "./CompanyCard.css";

/**
 * Company Card 
 * Shows information about a company 
 */

 function CompanyCard({ companyHandle, companyName, country, numEmployees, shortDescription, longDescription, websiteUrl, logoUrl, mainImageUrl, lookingFor }) {
  return (
    <div className="CompanyCard card">
      <div className="card-body">
        <h5>
          <Link to={`/companies/${companyHandle}`}>
          {companyName} 
          </Link>
          {logoUrl && <img src={logoUrl} alt={companyName} className="float-right ml-5" />}
        </h5>
        <p>{country}</p>
        <p>{numEmployees}</p>
        <p>{shortDescription}</p>
        <p>{longDescription}</p>
        <p>{lookingFor}</p>
        <p><a href={websiteUrl}>VISIT OUR WEBSITE</a></p>
        <p><img alt="company logo" src={logoUrl} /></p>
        <p><img alt="company banner" src={mainImageUrl} /></p>
      </div>
    </div>
  );
}

export default CompanyCard;