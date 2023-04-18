import React from "react";
import { Link } from "react-router-dom";
// import styled from "styled-components";
// import { Button } from "../styles";

function NavBar() {

  return (
    <div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/Animation">Animation Projects</Link>
      </div>
      <div>
        <Link to="/Contact">Contact</Link>
      </div>
      <div>
        <Link to="/About">About</Link>
      </div>
      <div>
        <Link to="/ProjectPage">Project Page</Link>
      </div>
      <div>
        </div>
    </div>
  );
}



export default NavBar;