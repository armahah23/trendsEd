import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import PropTypes from "prop-types";


export default function ProtectedRoutes({children}) {

    const {user} = useAuth();
    if (!user) {
        return <Navigate to={'/login'} />
        
    }

  return children;
}

ProtectedRoutes.propTypes = {
    children: PropTypes.node.isRequired
}
