import './App.css';
import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import ProtectedRoutes from './utils/ProtectedRoutes';

function App() {
  

  return (
    <>
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProtectedRoutes>
          <Home />
        </ProtectedRoutes>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AuthProvider>  
    </>
  )
}

export default App
