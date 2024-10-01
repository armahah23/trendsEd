import { useState } from "react"


export default function Navbar() {

    const [user, setUser] = useState(null);

  return (
    <div style={{height: '20vh', width: "100vw"}}>
        {user? <p>Hi {user}</p> : <button onClick={()=> setUser("John")} >Log in</button> }
    </div>
  )
}
