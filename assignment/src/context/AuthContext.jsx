import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import PropTypes from "prop-types";


const AuthContext = createContext(null);

//AuthProvider for export
export const AuthProvider = ({children}) => {
    const {user, setUser} = useState(null);
    return (
        <AuthContext.Provider value = {{user}}>{children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
}