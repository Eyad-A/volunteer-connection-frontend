import React, { useState, useContext } from "react";
import UserContext from "../auth/UserContext";
import VolunteerApi from "../api/api";

function UserConnections() {
  const { currentUser } = useContext(UserContext);
  const connections = currentUser.connections;

  return (
    <div class="container">
      <div class="row">
        <div class="col-lg-9">
          {connections.length 
          ? (
            <div>
              {connections.map(c => (
                c
              ))}
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