import React, { useState, useContext, useEffect } from "react";
import UserContext from "../auth/UserContext";
import VolunteerApi from "../api/api";
import CompanyCard from "../companies/CompanyCard";

function UserConnections() {
  const { currentUser } = useContext(UserContext);
  const connections = currentUser.connections;
  const [companies, setCompany] = useState([]);

  if (connections) {
    for (const connection in connections) {
      useEffect(function getCompanyDetail() {
        async function getCompany() {
          setCompany(await VolunteerApi.getCurrentCompany(connection));
        }
        getCompany();
      }, [connection]);
    }    
  }

  return (
    <div class="container">
      <div class="row">
        <div class="col-lg-9">
          {companies.length
            ? (
              <div>
                {companies.map(company => (
                  <CompanyCard
                  key={company.companyHandle}
                  companyHandle={company.companyHandle}
                  companyName={company.companyName}
                  country={company.country}
                  numEmployees={c.numEmployees}
                  shortDescription={c.shortDescription}                                   
                />
                )
                   
                )}

              </div>
            ) : (
              <p>You have no connections</p>
            )}
        </div>
      </div>
    </div>
  );
};

export default UserConnections;