import React from "react";
import { Link } from "react-router-dom";
import "./UserCard.css";

/**
 * User Card 
 * Shows information about a company 
 */

 function UserCard({ username, firstName, lastName, skill }) {
  return (
    <div className="UserCard card">
      <div className="card-body">
        <h5>          
          {username}                     
        </h5>
        <p>{firstName}</p>
        <p>{lastName}</p>
        <p>{skill}</p>                              
      </div>
    </div>
  );
}

export default UserCard;