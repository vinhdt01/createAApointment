import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import axios from 'axios';
import Menu from './components/menu/index'
import Slide from '../src/components/Slide/index'
import Schedule from '../src/components/Schedule/index'
import Login from '../src/components/Login/index'
import Register from '../src/components/Register/index'
import Result from '../src/components/result'

import { Routes, Route } from "react-router-dom";
// axios.defaults.withCredentials = true;
function App() {
  // var Status = (state) => useSelector(state.schedule.status)
  // console.log(Status)
//  React.useEffect(() => {
  axios.defaults.withCredentials = true;

//  } , [])
  return (
    <div className="App">
<Routes>
        <Route path="/" element={
          <>
          <Menu/>
      <Slide/>
      <Schedule/>
          </>
        } />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="result" element={<Result />} />

        
        
      </Routes>
    
    </div>
  );
}

export default App;



