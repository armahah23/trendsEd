import { createContext, useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';


const Authcontext = createContext(null);

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        let localUserName = localStorage.getItem("user");
        // let localUserDetails = (localStorage.getItem("userDetails"));
        let localUserDetails = JSON.parse(localStorage.getItem("userDetails"));
        console.log(localUserName);
        console.log(localUserDetails);
        setUser(localUserName);
      }, []);

    const handleUserChange = (userName) => {
        setUser(userName);
        localStorage.setItem("user", userName);
        // let userDetails = {
        //     userName: "Afrih",
        //     age: 23,
        //     occupation: "developer",
        // }
        // localStorage.setItem("userDetails", JSON.stringify(userDetails));
    }

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem("user");
        // localStorage.removeItem("userDetails");
    }

    return (
        <Authcontext.Provider value={{user, handleUserChange, handleLogout}}>
            {children}
        </Authcontext.Provider>
    )
}
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const useAuth = () => {
    return useContext(Authcontext);
}