import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AuthForm.css";

const AuthForm = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsRegister(!isRegister);
    setFormData({
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      confirmPassword: "",
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isRegister) {
      // Login logic
      const token = "dummyToken"; // Simulasi token dari server
      localStorage.setItem("token", token); // Simpan token ke localStorage
      navigate("/dashboard"); // Redirect ke dashboard
    } else {
      // Register logic
      if (formData.password !== formData.confirmPassword) {
        alert("Password tidak cocok");
        return;
      }
      const token = "dummyToken"; // Simulasi token dari server setelah registrasi
      localStorage.setItem("token", token); // Simpan token ke localStorage
      navigate("/dashboard"); // Redirect ke dashboard
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-logo">
        <h1>M Kracht</h1>
        <p>MechKracht</p>
      </div>
      <div className="auth-card">
        <h2>{isRegister ? "Create Account" : "Login"}</h2>
        <form onSubmit={handleSubmit}>
          {isRegister && (
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {isRegister && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          )}
          {!isRegister && (
            <div className="remember-password">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember Password</label>
            </div>
          )}
          <button type="submit" className="btn btn-primary">
            {isRegister ? "Register" : "Login"}
          </button>
        </form>
        <p className="toggle-text">
          {isRegister ? (
            <>
              Already have an account?{" "}
              <span onClick={toggleForm}>Login</span>
            </>
          ) : (
            <>
              Don’t have an account?{" "}
              <span onClick={toggleForm}>Register</span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
