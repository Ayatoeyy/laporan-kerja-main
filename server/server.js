const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();

// Middleware
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Simulasi database pengguna
const users = {
  "user@example.com": {
    name: "John Doe",
    profileImage: "default-profile.png",
  },
};

// Konfigurasi Multer untuk upload file
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

// API untuk mendapatkan data pengguna
app.get("/api/user", (req, res) => {
  const email = req.query.email;
  const user = users[email];

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// API untuk mengubah foto profil
app.post("/api/upload-profile", upload.single("profileImage"), (req, res) => {
  const email = req.query.email;
  const user = users[email];

  if (user) {
    user.profileImage = `/uploads/${req.file.filename}`;
    res.json({ message: "Profile updated", profileImage: user.profileImage });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// Jalankan server
app.listen(5000, () => console.log("Server running on http://localhost:5000"));
