import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProductListPage from './pages/ProductListPage';
import ProductForm from './components/ProductForm';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
      <Route  path="/" element={<Home/>} />
        <Route  path="/login" element={<LoginPage/>} />
        <Route  path="/signup" element={<SignupPage/>} />
        <Route  path="/products" element={<ProductListPage/>} />
        <Route  path="/products/add" element={<ProductForm/>} />
        <Route  path="/products/delete" element={<ProductForm/>} />
      </Routes>
    </Router>
  );
};

export default App;
