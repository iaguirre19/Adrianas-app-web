import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from '../components/pages/Dashboard';
import LoginComponent from '../components/pages/Login';

const AppRoutes = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<LoginComponent />} />
        </Routes>
      </BrowserRouter>
    );
  };

export default AppRoutes;

