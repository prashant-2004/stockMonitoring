import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLogin from "../pages/users/login";
import UserSignup from "../pages/users/signup";
import Home from "../pages/users/home";
import Watchlist from '../pages/users/watchlist';

function RoutesComponent(): JSX.Element {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<UserLogin />} />
      <Route path="/user-signup" element={<UserSignup />} />
      <Route path="/home" element={<Home />} />
      <Route path='/watchlist' element={<Watchlist/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default RoutesComponent;
