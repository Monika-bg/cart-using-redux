import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import Success from './pages/Success';
import NotFound from './pages/NotFound';
import MenuPage from './components/MenuPage.jsx';
import Login from './components/Login.jsx'; // Import the Login component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<Success />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/login" element={<Login />} /> {/* Route for Login */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </Router>
  );
};

export default App;
