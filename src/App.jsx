import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Hotels from './pages/Hotels';
import HotelDetails from './pages/HotelDetails';
import Reservations from './pages/Reservations';
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/Contact';
import About from './pages/About';
import Dashboard from './admin/Dashboard';
import ManageHotels from './admin/ManageHotels';
import ManageReservations from './admin/ManageReservations';
import ManageUsers from './admin/ManageUsers';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/hotels/:id" element={<HotelDetails />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/hotels" element={<ManageHotels />} />
        <Route path="/admin/reservations" element={<ManageReservations />} />
        <Route path="/admin/users" element={<ManageUsers />} />
      </Routes>
    </Router>
  );
};

export default App;
