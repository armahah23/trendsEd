import { Routes, Route } from "react-router";
import Content from "./components/Content";

import Login from "./pages/Login";
import Crud from "./components/crud";
import MainUi from "../mailBox/mainUi";

function App() {
  return (
    <>
        <Routes>
          <Route path="/content" element={<Content />} />
          <Route path="/mailbox" element={<MainUi />} />
          <Route path="/login" element={<Login />} />
          <Route path="/crud" element={<Crud />} />
        </Routes>
    </>
  );
}

export default App;
