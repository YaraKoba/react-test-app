import React from "react";
import cl from './Navabar.module.css'
import { NavLink } from "react-router-dom";


function Navabar() {
  return (
      <div className={cl.navabar}>
        <div className={cl.navabar__links}>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/posts">Posts</NavLink>
        </div>
      </div>
  );
};

export default Navabar;
