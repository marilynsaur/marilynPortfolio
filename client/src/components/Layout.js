import React from "react";
import {Outlet, Link } from "react-router-dom";
// import styled from "styled-components";
// import { Button } from "../styles";



function Layout() {

  return (
    <>
      <nav className="topnav">
        <div >
      
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/projectpage">Project page</Link>
          </div>
          <div>
            <Link to="/contact">Contact</Link>
          </div>
          <div>
            <Link to="/about">About</Link>
          </div>
      
        </div>
      </nav>

      <Outlet />
    </>
    
  );
}



export default Layout