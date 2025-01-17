import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LogoutPage from "../components/LogoutPage";

const MainRoutes = () => {
  const handleLogout = () => {
    localStorage.removeItem("token"); // Hapus token atau data lain
    window.location.href = "/login"; // Redirect ke halaman login
  };

  return (
    <Router>
      <Routes>
        <Route path="/logout" element={<LogoutPage onLogout={handleLogout} />} />
        {/* Tambahkan route lainnya di sini */}
      </Routes>
    </Router>
  );
};

export default MainRoutes;
