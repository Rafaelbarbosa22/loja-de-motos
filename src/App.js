import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import Cart from './Cart';
import OrderForm from './OrderForm';
import './App.css';


function App() {
  return (
    <Router>
      <div className="app">
        {/* Adicione links para suas rotas com classes CSS */}
        <nav>
          <ul>
            <li>
              <Link to="/" className="nav-link">Inicio</Link>
            </li>
            <li>
              <Link to="/products" className="nav-link">Produtos</Link>
            </li>
            <li>
              <Link to="/cart" className="nav-link">Moto</Link>
            </li>
            <li>
              <Link to="/order" className="nav-link">Modelos</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<OrderForm />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
