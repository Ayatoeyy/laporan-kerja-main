import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AuthForm.css";

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false); // Menentukan mode login/daftar
  const navigate = useNavigate(); // Hook untuk navigasi

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulasi login (bisa diganti dengan API call)
    if (email === "admin@example.com" && password === "password") {
      // Simpan token atau data ke localStorage
      localStorage.setItem("token", "your-token-here");
      
      // Arahkan ke dashboard setelah login berhasil
      navigate("/dashboard");
    } else {
      alert("Login gagal! Silakan periksa email dan password Anda.");
    }
  };

  return (
    <div className="auth-form-container">
      <h2>{isRegister ? "Create Account" : "Login"}</h2>
      <form onSubmit={handleSubmit}>
        {isRegister && (
          <>
            <input
              type="text"
              placeholder="First Name"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              required
            />
          </>
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {isRegister && (
          <input
            type="password"
            placeholder="Confirm Password"
            required
          />
        )}
        <button type="submit">{isRegister ? "Register" : "Login"}</button>
      </form>
      <p onClick={() => setIsRegister(!isRegister)} className="toggle-auth-mode">
        {isRegister ? "Already have an account? Login here" : "Don't have an account? Register here"}
      </p>
    </div>
  );
};

export default AuthForm;
