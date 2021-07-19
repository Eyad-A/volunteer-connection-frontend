import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./routes-nav/Navigation";
import Routes from "./routes-nav/Routes";
import jwt from "jsonwebtoken";
import VolunteerApi from "./api/api";
import UserContext from "./auth/UserContext";
import useLocalStorage from "./hooks/useLocalStorage";
import LoadingSpinner from "./common/LoadingSpinner";
export const TOKEN_LOCAL_STORAGE_ID = "volunteer-token";

function App() {

  const [currentUser, setCurrentUser] = useState(null);
  const [currentCompany, setCurrentCompany] = useState(null);
  const [token, setToken] = useLocalStorage(TOKEN_LOCAL_STORAGE_ID);
  const [infoLoaded, setInfoLoaded] = useState(false);
  const [connectionHandles, setConnectionHandles] = useState([]);

  // Load user info from the API 
  useEffect(function loadUserInfo() {
    async function getCurrentUser() {
      if (token) {
        try {
          let { username } = jwt.decode(token);
          let { companyHandle } = jwt.decode(token);
          VolunteerApi.token = token;

          if (username) {
            let currentUser = await VolunteerApi.getCurrentUser(username);
            setCurrentUser(currentUser);
          }

          if (companyHandle) {
            let currentCompany = await VolunteerApi.getCurrentCompany(companyHandle);
            setCurrentCompany(currentCompany);
          }

          
        } catch (err) {
          console.error("Problem with the loadUserInfo function", err);
          setCurrentUser(null);
          // setCurrentCompany(null);
        }
      }
      setInfoLoaded(true);
    }
    setInfoLoaded(false);
    getCurrentUser();
  }, [token]);

  // Logout function 
  function logout() {
    setCurrentUser(null);
    setCurrentCompany(null);
    setToken(null);
  }

  // Signup user function 
  async function signupUser(signupData) {
    try {
      let token = await VolunteerApi.signupUser(signupData);
      setToken(token);
      return {
        success: true
      };
    } catch (err) {
      console.error("Problem with the signupUser function", err);
      return {
        success: false, err
      };
    }
  }

  // Signup company function 
  async function signupCompany(signupData) {
    try {
      let token = await VolunteerApi.signupCompany(signupData);
      setToken(token);
      return {
        success: true
      };
    } catch (err) {
      console.error("Problem with the signupCompany function", err);
      return {
        success: false, err
      };
    }
  }

  // Login user function 
  async function loginUser(loginData) {
    try {
      let token = await VolunteerApi.loginUser(loginData);
      setToken(token);
      return {
        success: true
      };
    } catch (err) {
      console.error("Problem with the login function", err);
      return {
        success: false, err
      };
    }
  }

  // Login company function 
  async function loginCompany(loginData) {
    try {
      let token = await VolunteerApi.loginCompany(loginData);
      setToken(token);
      return {
        success: true
      };
    } catch (err) {
      console.error("Problem with the login function", err);
      return {
        success: false, err
      };
    }
  }

  function hasConnectedToCompany(companyHandle) {
    return connectionHandles.includes(companyHandle);
  }

  function connectToCompany(companyHandle) {
    if (hasConnectedToCompany(companyHandle)) return;
    VolunteerApi.connectToCompany(currentUser.username, companyHandle);
    setConnectionHandles([...connectionHandles, companyHandle]);
  }

  if (!infoLoaded) return <LoadingSpinner />;

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ connectionHandles, setConnectionHandles, currentUser, setCurrentUser, currentCompany, setCurrentCompany, hasConnectedToCompany, connectToCompany }}>
        <div>
          <Navigation logout={logout} />
          <Routes loginUser={loginUser} signupUser={signupUser} loginCompany={loginCompany} signupCompany={signupCompany} />
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
