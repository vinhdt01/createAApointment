import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Menu from "./components/menu/index";
import Slide from "../src/components/Slide/index";
import Schedule from "../src/components/Schedule/index";
import Login from "../src/components/Login/index";
import Register from "../src/components/Register/index";
import Result from "../src/components/result";
import ListSchedule from "../src/components/ListSchedule/index";
import Container from "../src/components/Container/index";
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
      </Routes>
    </div>
  );
}

export default App;
