import React, { useState, useContext, useEffect } from "react";
import UserContext from "../auth/UserContext";
import VolunteerApi from "../api/api";
import CompanyCard from "../companies/CompanyCard";

function UserConnections() {
  const { currentUser, connectionHandles } = useContext(UserContext);

  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const connections = currentUser.connections.concat(connectionHandles);
    const comps = connections.map((c) => VolunteerApi.getCurrentCompany(c));
    Promise.all(comps).then(comps => isMounted && setCompanies(comps));
    return () => { isMounted = false };
  }, [currentUser, connectionHandles]);

  if (!companies || companies.length === 0) {
    return (
      <div className="container">
        <div className="row my-3">
          <div className="col-lg-2">

          </div>
          <div className="col-lg-8">
            <div>
              <p>You have no connections</p>
              <p><a href="/companies">View current companies</a></p>
            </div>
          </div>
          <div className="col-lg-2">

          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-2">

          </div>
          <div className="col-lg-8">
            <div className="my-3"><h1 className="text-center">Connections</h1>
              {companies && companies.map(c => (
                <CompanyCard
                  key={c.companyHandle}
                  companyHandle={c.companyHandle}
                  companyName={c.companyName}
                  state={c.state}
                  numEmployees={c.numEmployees}
                  shortDescription={c.shortDescription}
                  logoUrl={c.logoUrl}
                  lookingFor={c.lookingFor}
                />
              ))}
            </div>
          </div>
          <div className="col-lg-2">

          </div>
        </div>
      </div>
    );
  }
};

export default UserConnections;