import React from "react";
import './styles/App.css'
import AppRoutes from "./AppRouters";
import { BrowserRouter } from "react-router-dom";
import Navabar from "./components/UI/navabar/Navabar";



function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Navabar/>
        <AppRoutes/>
      </BrowserRouter>
    </div>
  );
};

export default App;
