import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "../homepage/Homepage";
import UserLoginForm from "../auth/UserLoginForm";
import CompanyLoginForm from "../auth/CompanyLoginForm";
import UserSignupForm from "../auth/UserSignupForm";
import CompanySignupForm from "../auth/CompanySignupForm";
import CompanyList from "../companies/CompanyList";
import CompanyDetail from "../companies/CompanyDetail";
import UserProfileForm from "../profiles/UserProfileForm";
import UserConnections from "../connections/UserConnections";
import CompanyProfileForm from "../profiles/CompanyProfileForm";
import PrivateRoute from "./PrivateRoute";

function Routes({ loginUser, signupUser, loginCompany, signupCompany }) {
  return (
    <div className="">
      <Switch>

        <Route exact path="/">
          <Homepage />
        </Route>

        <Route exact path="/login-user">
          <UserLoginForm loginUser={loginUser} />
        </Route>

        <Route exact path="/signup-user">
          <UserSignupForm signupUser={signupUser} />
        </Route>

        <Route exact path="/login-company">
          <CompanyLoginForm loginCompany={loginCompany} />
        </Route>

        <Route exact path="/signup-company">
          <CompanySignupForm signupCompany={signupCompany} />
        </Route>

        <Route exact path="/companies">
          <CompanyList />
        </Route>        

        <Route exact path="/companies/:companyHandle">
          <CompanyDetail />
        </Route>
        
        <PrivateRoute exact path="/profile-user">
          <UserProfileForm />
        </PrivateRoute>
        <PrivateRoute exact path="/user-connections">
          <UserConnections />
        </PrivateRoute>

        <PrivateRoute exact path="/profile-company">
          <CompanyProfileForm />
        </PrivateRoute>

        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default Routes;