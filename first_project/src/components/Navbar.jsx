// import { useState } from "react"
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Navbar() {

    // const [user, setUser] = useState(null);
    const {user, logout} = useAuth();
    const navigate = useNavigate();

    const handlelogin = () => {
      navigate('/login');
    }

    // const [username, setUsername] = useState(null);
    // const [count, setCount] = useState(0);

  return (
    <div style={{height: '20vh', width: "100vw"}}>


        {user? <><p>Hi {user}</p> <button onClick={() => logout() }>Log Out</button></> : <button onClick={()=> handlelogin()} >Log in</button> }

        {/* {count? <p> Count: {count}</p>: <button onClick={()=> setCount(count+1)}>Increment</button>} */}
    </div>
  )
}
