import React from 'react';
import Home from './home';
import Cart from './cart';
import { CartProvider } from "react-use-cart";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="React Logo" loading="lazy" />
              RKA SHOP
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/home">Home <span className="sr-only"></span></a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="/cart">My carts  <span className="sr-only"></span></a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="#">About <span className="sr-only"></span></a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="#">Contact <span className="sr-only"></span></a>
                </li>
                
              </ul>
             
            </div>
          </div>
        </nav>
      </header>
      
      <CartProvider>
      <Router>
  
  <Routes>
    <Route path='/home' element={<Home/>} />
    <Route path='/cart' element={<Cart/>} />
  </Routes>
</Router>
      </CartProvider>
    </>
  );
}

export default App;
