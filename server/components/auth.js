const express = require("express");
const router = express.Router();

// Simulasi database pengguna
const users = {};

// Login
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users[email];

  if (user && user.password === password) {
    res.json({ message: "Login successful", user });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

// Register
router.post("/register", (req, res) => {
  const { email, password, name } = req.body;

  if (users[email]) {
    return res.status(400).json({ message: "User already exists" });
  }

  users[email] = { email, password, name, profileImage: "default-profile.png" };
  res.json({ message: "Registration successful", user: users[email] });
});

module.exports = router;
