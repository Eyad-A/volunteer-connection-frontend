import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import UserContext from "../auth/UserContext";

/**
 * Private Route
 * Check if there is a current user.
 * If not, redirect to the login page 
 */

function PrivateRoute({ exact, path, children }) {
  const { currentUser, currentCompany } = useContext(UserContext);

  if (!currentUser && !currentCompany) {
    return <Redirect to="/login" />
  }

  return (
    <Route exact={exact} path={path}>
      {children}
    </Route>
  );
}

export default PrivateRoute;