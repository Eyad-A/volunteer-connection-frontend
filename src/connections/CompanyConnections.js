import React, { useState, useContext, useEffect } from "react";
import UserContext from "../auth/UserContext";
import VolunteerApi from "../api/api";
import UserCard from "../users/UserCard";

function CompanyConnections() {
  const { currentCompany } = useContext(UserContext);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const connections = currentCompany.users;
    const freelancers = connections.map((u) => VolunteerApi.getCurrentUser(u));
    Promise.all(freelancers).then(freelancers => isMounted && setUsers(freelancers));
    return () => { isMounted = false };
  }, [currentCompany]);

  if (!users || users.length === 0) {
    return (
      <div className="container">
        <div className="row my-3">
          <div className="col-lg-2">

          </div>
          <div className="col-lg-8">
            <div>
              <p>You have no connections</p>
              <p><a href="/">Back to homepage</a></p>
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
              {users && users.map(u => (
                <UserCard
                  key={u.username}
                  username={u.username}
                  firstName={u.firstName}
                  lastName={u.lastName}
                  skill={u.skill}
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

export default CompanyConnections;