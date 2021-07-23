import React from "react";
import UserContext from "./auth/UserContext";

const demoUser = {
    username: "demouser",
    first_name: "demouser",
    last_name: "demouser",
    email: "demouser@demouser.com",
    skill: "Developer"
};

const UserProvider = ({
    children, currentUser = demoUser, hasConnectedToCompany = () => false 
}) => (
    <UserContext.Provider value={{ currentUser, hasConnectedToCompany }}>
        {children}
    </UserContext.Provider>
);

export { UserProvider};