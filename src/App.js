import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import FormLaporan from "./components/FormLaporan";
import HistoriLaporan from "./components/HistoriLaporan";
import ExportData from "./components/ExportData";
import AuthForm from "./components/AuthForm"; // Mengimpor AuthForm untuk Login & Register
import LogoutPage from "./components/LogoutPage"; // Halaman Logout
import { AppProvider } from "./context/AppContext";
import { ReportProvider } from "./contexts/ReportContext";
import "./components/Sidebar.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

const App = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  // Fungsi untuk toggle Sidebar
  const toggleSidebar = () => {
    setIsSidebarActive(!isSidebarActive);
  };

  // Fungsi untuk Logout
  const handleLogout = () => {
    localStorage.removeItem("token"); // Hapus token dari localStorage
    window.location.href = "/login"; // Redirect ke halaman login
  };

  // Layout setelah login, dengan validasi token
  const AppLayout = () => {
    const token = localStorage.getItem("token");

    // Jika tidak ada token, arahkan kembali ke halaman login
    if (!token) {
      return <Navigate to="/login" />;
    }

    return (
      <div className="app-container">
        <Sidebar isActive={isSidebarActive} toggleSidebar={toggleSidebar} />
        <div className="main-content">
          <Header />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="form-laporan" element={<FormLaporan />} />
            <Route path="histori-laporan" element={<HistoriLaporan />} />
            <Route path="export-data" element={<ExportData />} />
            {/* Route untuk Logout */}
            <Route path="logout" element={<LogoutPage onLogout={handleLogout} />} />
            {/* Halaman Not Found */}
            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Routes>
        </div>
      </div>
    );
  };

  return (
    <ReportProvider>
      <AppProvider>
        <Router>
          <Routes>
            {/* Redirect ke login jika membuka root */}
            <Route path="/" element={<Navigate to="/login" />} />
            {/* Halaman Login menggunakan AuthForm */}
            <Route
              path="/login"
              element={
                <div className="login-page">
                  <AuthForm /> {/* Komponen Login & Register */}
                </div>
              }
            />
            {/* Semua route setelah login */}
            <Route path="/*" element={<AppLayout />} />
          </Routes>
        </Router>
      </AppProvider>
    </ReportProvider>
  );
};

export default App;
