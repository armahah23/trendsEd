import { useAuth } from "../../context/AuthContext";


function Login() {

    const {login} = useAuth();

  return (
    <>
        <input type="text" placeholder="username" style={{display:"block", marginBottom: "15px"}} />
        <input type="text" placeholder='Password' style={{display:"block", marginBottom: "15px"}}/>
        <button onClick={() => login('Afrih') }>Login</button>
    </>
  )
}

export default Login