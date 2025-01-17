import React from "react";
import "./Login.css";
import mechkrachtLogo from "../assets/mechkracht-logo.png"; // Ganti dengan path gambar Anda

const Login = () => {
  return (
    <div className="login-container">
      {/* Bagian Gambar */}
      <div className="login-image">
        <img src={mechkrachtLogo} alt="MechKracht Logo" />
      </div>

      {/* Bagian Form */}
      <div className="login-form">
        <div className="tabs">
          <button className="tab active">Login</button>
          <button className="tab">Daftar</button>
        </div>
        <form>
          <input
            type="email"
            placeholder="Masukkan Email"
            required
            className="input-field"
          />
          <input
            type="password"
            placeholder="Masukkan Password"
            required
            className="input-field"
          />
          <button type="submit" className="submit-btn">
            Login
          </button>
        </form>
        <p className="register-link">
          Belum punya akun? <a href="/register">Daftar sekarang</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
