import React from "react";
import "./navbar.css";
import logo from "../../assets/GPT-3.svg";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="gpt3_navbar">
      <div className="gpt3_navbar_links">
        <div className="gpt3_navbar_links">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
