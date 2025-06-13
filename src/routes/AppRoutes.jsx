import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import FormPage from '../pages/FormPage';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}