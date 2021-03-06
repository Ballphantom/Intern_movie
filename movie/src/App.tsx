import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import List from "./Pages/List";
import MovieDetail from "./Pages/MovieDetail";

function App() {

  return (
    <div className="max-w-[100vw] min-h-[100vh] h-full bg-[#f3f3f3] ">
      <Navbar />
      <div className='flex justify-center mx-[120px] py-32'>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/movielist" element={<List />} />
          <Route path="/moviedetail" element={<MovieDetail />} />
        </Routes>
      </div>
    </div>

  );
}

export default App;
