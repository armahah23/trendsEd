import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

//AuthProvider for export
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState('');
  const userArray = [
    { username: "Afrih", password: "1234", name: "Afrih" },
    { username: "user2", password: "password2", name: "Jane Smith" },
  ];

  const navigate = useNavigate();

  const login = (username, password) => {
    const foundUser = userArray.find(
      (user) => user.username === username && user.password === password
    );
    if (foundUser) {
      setUser(foundUser.username);
    }
    navigate("/");
  };

  const logout = () => {
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

