import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/users/Login";
import Signup from "../pages/users/Signup";
import Home from "../pages/users/Home";
import Watchlist from '../pages/users/Watchlist';

function RoutesComponent(): JSX.Element {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/user-signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />
      <Route path='/watchlist' element={<Watchlist/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default RoutesComponent;
