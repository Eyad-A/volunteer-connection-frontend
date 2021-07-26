import React from "react";
import { Link } from "react-router-dom";
import "./CompanyCard.css";

/**
 * Company Card 
 * Shows information about a company 
 */

 function CompanyCard({ companyHandle, companyName, state, numEmployees, shortDescription, logoUrl, lookingFor }) {
  return (
    <div className="CompanyCard card">
      <div className="card-body">
        <h5>
          <Link to={`/companies/${companyHandle}`}>
          {companyName} 
          </Link>
          {logoUrl && <img src={logoUrl} alt={companyName} className="float-right ml-5" />}
        </h5>        
        <p>{state} | {numEmployees} employees</p>
       
        <p>{shortDescription}</p>        
        <p>Looking for: {lookingFor}</p>                        
      </div>
    </div>
  );
}

export default CompanyCard;