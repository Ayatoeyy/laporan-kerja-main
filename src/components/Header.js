import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">
          <i className="fa fa-home"></i>
          <span>CV AKBAR</span>
        </div>
      </div>
      <div className="header-right">
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search..."
          />
          <button className="search-button">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
