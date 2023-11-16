import React from "react";
import ReactDOM from "react-dom/client";
import userlogin from "./userlogin.png";
import react from "./react.png";
import "./index.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={react} alt="Logo" className="logo" />
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          aria-label="Search"
          className="search-input"
        />
      </div>
      <div className="user-container">
        <img src={userlogin} alt="User Icon" className="user-icon" />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
