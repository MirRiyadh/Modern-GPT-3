import React from "react";
import "./navbar.css";
import logo from "../../assets/GPT-3.svg";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="gpt3_navbar">
      <div className="gpt3_navbar_links">
        {/* logo */}
        <div className="gpt3_navbar_links_logo">
          <img src={logo} alt="logo" />
        </div>

        {/* menu links */}
        <div className="gpt3_navbar_links_container">
          <p>
            <a href="#home">Home</a>
          </p>

          <p>
            <a href="#gpt3">What is GPT3</a>
          </p>
          <p>
            <a href="#possibility">Open AI</a>
          </p>
          <p>
            <a href="#features">Features</a>
          </p>
          <p>
            <a href="#Blog">Blog</a>
          </p>
          <p>
            <a href="#about">About</a>
          </p>
        </div>
      </div>
      {/* gpt3_navbar_sign */}
      <div className="gpt3_navbar_sign">
        <p>Sign In</p>
        <button type="button">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
