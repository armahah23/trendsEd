import "./navbar.css";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Navbar() {
  // const [user, setUser] = useState(null);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handlelogin = () => {
    navigate("/login");
  };

  return (
    <>
      <div className="nav-page">
        <div className="nav-container">
          {user ? (
            <>
              <h1>Wel Come back {user}</h1>{" "}
              <button onClick={() => logout()}>Logout</button>
            </>
          ) : (
            <button onClick={() => handlelogin()} id="home-login">
              Login
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
