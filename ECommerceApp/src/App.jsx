import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/ProductListPage';
import ProductDetails from './pages/ProductDetailPage';
import Login from './pages/Login';
import AddProduct from './pages/AddProduct';
import Navbar from './components/Navbar';
import { AuthProvider } from './components/AuthContext';
import './styles/styles.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/productDetails/:id" element={<ProductDetails />} />
          <Route path="/add" element={<AddProduct />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
