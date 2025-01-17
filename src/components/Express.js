const express = require("express");
const multer = require("multer");
const app = express();
const upload = multer({ dest: "uploads/" });

// Simulasi database
const users = {
  "user@example.com": {
    name: "John Doe",
    profileImage: "default-profile.png",
  },
};

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

// API untuk upload gambar profil
app.post("/api/upload-profile-image", upload.single("profileImage"), (req, res) => {
  const email = req.query.email;
  const user = users[email];
  if (user) {
    user.profileImage = `/uploads/${req.file.filename}`;
    res.json({ profileImage: user.profileImage });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
