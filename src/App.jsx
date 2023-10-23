import React from "react";
import Ad from "./Ad";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { CarProvider, CarContext } from "./context/CarContext";
import Home from "./Home";
import AuthProvider from "./context/AuthContext";

import LoginSignup from "./Components/LoginSignup/LoginSignup";
import { BidProvider, BidContext } from "./context/BidContext";
import CreateAd from "./CreateAd";

function App() {
  return (
    <AuthProvider>
      <BidProvider>
        <CarProvider>
          <Router>
            <Routes>
              <Route path="/" exact element={<Home />}></Route>
              <Route path="/login" exact element={<LoginSignup />}></Route>
              <Route path="/ad/:Id" exact element={<Ad />}></Route>
              <Route path="/ad/create" exact element={<CreateAd />}></Route>
            </Routes>
          </Router>
        </CarProvider>
      </BidProvider>
    </AuthProvider>
  );
}

export default App;