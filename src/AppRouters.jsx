import React from 'react';
import { Routes, Route } from "react-router-dom";


import Posts from "./pages/post";
import About from './pages/About';


function AppRoutes() {
  return (    
      <Routes>
        <Route path="/posts" element={<Posts/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
  );
}

export default AppRoutes;