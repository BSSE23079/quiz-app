
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo"></div>
      <nav className="nav">
        <a href="#">Categories</a>
        <input type="text" placeholder="Search for courses" />
        <a href="#">Signup</a>
        <button className="nav-button">Button</button>
      </nav>
    </header>
  );
};

export default Header;
