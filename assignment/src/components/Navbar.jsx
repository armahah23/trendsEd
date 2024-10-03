import './navbar.css';
import { useAuth } from '../context/AuthContext';

function Navbar() {

    // const [user, setUser] = useState(null);
    const {user} = useAuth();
  return (
    <>
        <div className="nav-page">
            <div className="nav-container">
                <h1>Wel Come back {user}</h1>
                <button>Login</button>
            </div>
        </div>
    </>
  )
}

export default Navbar