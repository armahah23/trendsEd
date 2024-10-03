import "./login.css";

export default function Login() {
  return (
    <>
      <div className="page-container">
        <div className="container">
          <h1>Login here</h1>
          <label htmlFor="username">User Name</label>
          <input type="text" placeholder="Enter username" />
          <label htmlFor="password">Password</label>
          <input type="text" placeholder="Enter password" />
          <button>Login</button>
        </div>
      </div>
    </>
  );
}
