import React, { useState, useContext, useEffect } from "react";
import UserContext from "../auth/UserContext";
import VolunteerApi from "../api/api";
import CompanyCard from "../companies/CompanyCard";

function UserConnections() {
  const { currentUser } = useContext(UserContext);
  const connections = currentUser.connections;
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const comps = connections.map((c) => VolunteerApi.getCurrentCompany(c));
    Promise.all(comps).then((comps => setCompanies(comps)));
  }, [connections]);

  if (!companies || companies.length == 0) {  
    return (
      <div class="container">
        <div class="row">
          <div class="col-lg-9">
            <div>
              <p>You have no connections</p>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div class="container">
        <div class="row">
          <div class="col-lg-9">
            <div>
              {companies && companies.map(c => (
                <CompanyCard
                  key={c.companyHandle}
                  companyHandle={c.companyHandle}
                  companyName={c.companyName}
                  country={c.country}
                  numEmployees={c.numEmployees}
                  shortDescription={c.shortDescription}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default UserConnections;