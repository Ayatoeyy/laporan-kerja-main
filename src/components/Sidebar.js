import React from "react";
import { NavLink } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";
import "./Sidebar.css";

const Sidebar = () => {
  const { user } = useUserContext(); // Ambil data pengguna

  return (
    <div className="sidebar">
      {/* Bagian Header User */}
      <div className="user-section">
        <img
          src={user.avatarURL || "https://i.pravatar.cc/150"}
          alt="User Avatar"
          className="user-avatar"
        />
        <p className="user-name">{user.name || "User"}</p>
      </div>

      {/* Menu Navigasi */}
      <nav className="menu">
        <NavLink
          to="/dashboard"
          className="menu-item"
          activeClassName="active"
        >
          <i className="bi bi-house"></i> <span>Dasboard</span>
        </NavLink>
        <NavLink
          to="/form-laporan"
          className="menu-item"
          activeClassName="active"
        >
          <i className="bi bi-pencil-square"></i> <span>Form Laporan</span>
        </NavLink>
        <NavLink
          to="/histori-laporan"
          className="menu-item"
          activeClassName="active"
       
        >
          <i className="bi bi-clock-history"></i> <span>Histori Laporan</span>
        </NavLink>
        <NavLink
          to="/export-data"
          className="menu-item"
          activeClassName="active"
        >
       
          <i className="bi bi-file-earmark-arrow-down"></i>{" "}
          <span>Export Data</span>
        </NavLink>
        <NavLink
          to="/logout"
          className="menu-item"
          activeClassName="active"
        >
          <i className="bi bi-box-arrow-right"></i> <span>Log Out</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
