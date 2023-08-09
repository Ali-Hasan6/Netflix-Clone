import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import { AuthContextProvider } from './context/AuthContext';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Accounts from './pages/Accounts';
import ProtectedRoute from './components/ProtectedRoute';
function App() {

  return (
    <div>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/accounts" element={<ProtectedRoute><Accounts /></ProtectedRoute>} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;