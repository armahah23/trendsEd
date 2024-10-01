import { createContext, useContext, useState } from "react";


const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState("John");

    return (
        <AuthContext.Provider value={{user}}>
        {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}