import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <nav>
      <button>
        <Link to="/cpit-405-lab-8/">Home</Link>
      </button>
      <button>
        <Link to="/cpit-405-lab-8/about">About us</Link>
      </button>
    </nav>
  );
};

export default Header;
