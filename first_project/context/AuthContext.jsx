import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';


const Authcontext = createContext(null);

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const login = (username) => {
        setUser(username);
        navigate('/');
    };

    const logout = () => {
        setUser(null);
        navigate('/login');
    };

    return (
        <Authcontext.Provider value={{user,login, logout}}>
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