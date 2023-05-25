import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"
import ActiveLink from "../ActiveLink/ActiveLink";

const Header = () => {
  return (
    <div>
      <nav>
        <ActiveLink to="/"><span className="nav-item">Home</span></ActiveLink>
        <ActiveLink to="/about"><span className="nav-item">About</span></ActiveLink>
        <ActiveLink to="/member"><span className="nav-item">Member</span></ActiveLink>
        <ActiveLink to="/posts"><span className="nav-item">Posts</span></ActiveLink>
        <ActiveLink to="/contact"><span className="nav-item">Contact</span></ActiveLink>
      </nav>
    </div>
  );
};

export default Header;
