import React, { useState, useEffect } from "react";
import VolunteerApi from "../api/api";
import CompanyCard from "./CompanyCard";
import LoadingSpinner from "../common/LoadingSpinner";

/**
 * Company List 
 * Shows a page with a list of all companies 
 * routed at /companies 
 */

function CompanyList() {
  console.debug("CompanyList");
  const [companies, setCompanies] = useState([]);

  useEffect(function getCompaniesOnMount() {
    console.debug("getCompaniesOnMount");
    getAllCompanies();
  }, []);

  // on search form submit, run this function 
  async function getAllCompanies() {
    let companies = await VolunteerApi.getCompanies();
    setCompanies(companies);
  }

  if (!companies) return <LoadingSpinner />;

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-2">

        </div>
        <div className="col-lg-8">
          <div className="my-3"><h1 className="text-center">Companies</h1></div>          
          {companies.length
            ? (
              <div>
                {companies.map(c => (
                  <CompanyCard
                    key={c.companyHandle}
                    companyHandle={c.companyHandle}
                    companyName={c.companyName}
                    state={c.state}
                    numEmployees={c.numEmployees}
                    shortDescription={c.shortDescription}
                    longDescription={c.longDescription}
                    websiteUrl={c.websiteUrl}
                    logoUrl={c.logoUrl}
                    mainImageUrl={c.mainImageUrl}
                    lookingFor={c.lookingFor}
                  />
                ))}
              </div>
            ) : (
              <p>Loading...</p>
            )}
        </div>
        <div className="col-lg-2">

        </div>
      </div>
    </div>
  );
}

export default CompanyList;