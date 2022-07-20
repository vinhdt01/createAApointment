import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import Login from "../src/components/Login/index";
import Register from "../src/components/Register/index";
import Result from "../src/components/result";
import ListSchedule from "../src/components/ListSchedule/index";
import Container from "../src/components/Container/index";
import Social from "../src/components/Social/index";
import { Routes, Route } from "react-router-dom";
// axios.defaults.withCredentials = true;
function App() {
  axios.defaults.withCredentials = true;
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="result" element={<Result />} />
        <Route path="listschedule/" element={<ListSchedule />} />
        <Route path="social" element={<Social />} />
      </Routes>
    </div>
  );
}

export default App;
