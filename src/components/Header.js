import React from "react";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <header className="header">
      <h1 className="title">Rick y Morty</h1>
      <img src={logo} alt="Rick y Morty logo" className="logo" />
    </header>
  );
};

export default Header;
