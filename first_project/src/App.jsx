// import Home from "./pages/Home"
// import Array from "./components/Array"
// import ButtonChange from "./components/ButtonChange"
// import Calculator from "./components/Calculator";
// import ToDo from "./components/ToDo";
// import QR_generator from "./QR_Generator/QR_generator";

import { AuthProvider } from "../context/AuthContext";
import { Routes, Route } from "react-router";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import ProvideRoutes from "./utils/ProvideRoutes";




function App() {
  return (
    <>
      {/* <Home /> */}
      {/* <ButtonChange /> */}
      {/* <Array /> */}
      {/* <Calculator /> */}
      {/* <QR_generator /> */}
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProvideRoutes>
            <Content />
          </ProvideRoutes>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthProvider>
      
    </>
  );
}

export default App;
