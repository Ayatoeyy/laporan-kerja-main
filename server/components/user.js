const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();

// Simulasi database pengguna
const users = {
  "user@example.com": {
    name: "John Doe",
    profileImage: "default-profile.png",
  },
};

// Konfigurasi Multer
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

// Get user data
router.get("/", (req, res) => {
  const email = req.query.email;
  const user = users[email];

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// Update profile image
router.post("/upload-profile-image", upload.single("profileImage"), (req, res) => {
  const email = req.query.email;
  const user = users[email];

  if (user) {
    user.profileImage = `/uploads/${req.file.filename}`;
    res.json({ message: "Profile image updated", profileImage: user.profileImage });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

module.exports = router;
