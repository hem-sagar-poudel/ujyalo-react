import React from 'react';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Login from '../Authentication/login';
import Register from '../Authentication/Register';
import Home from '../Authentication/home';
import PasswordReset from '../Authentication/password_reset';
import Footer from './footer';
//Navigation bar for guest users 
export default function GuestNav() {
  return (
    <div className="App">
      <nav className="bg-yellow-500 shadow-lg">
        <div className="flex justify-between items-center py-3">
          <div>
            <Link to="/">
              <img src={require('./logo.png')} className="w-20 h-auto absolute mb-0 -mt-10" alt="Ujyalo Logo" />
            </Link>
          </div>
          <Link to="/" className="text-3xl text-white block ml-20 mr-4">Ujyalo</Link>
          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <Link to="/login" className="text-white text-1xl hover:text-gray-300 mx-2">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/password_reset' element={<PasswordReset />} />
        </Routes>
      </div>

      <Footer />

    </div>
  );
}
