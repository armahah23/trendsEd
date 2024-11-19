import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

const Local = () => {
  const { user, handleUserChange, handleLogout } = useAuth();
  const [userName, setUserName] = useState(null);

  return (
    <div>
      {!user ? (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "400px",
              gap: "10px",
            }}
          >
            <label htmlFor="userName">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <button onClick={() => handleUserChange(userName)}>Log In</button>
          </div>
        </>
      ) : (
        <>
          <h1>My name is {user} </h1>
          <button onClick={() => handleLogout()}>Log Out</button>
        </>
      )}
    </div>
  );
};

export default Local;
