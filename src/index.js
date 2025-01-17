import React from "react";
import ReactDOM from "react-dom/client"; // React 18 menggunakan createRoot
import "./index.css"; // Impor CSS global
import "bootstrap/dist/css/bootstrap.min.css"; // Impor Bootstrap CSS global
import "@fortawesome/fontawesome-free/css/all.min.css"; // Impor FontAwesome CSS
import App from "./App"; // Impor komponen utama App
import reportWebVitals from "./reportWebVitals"; // Pengukuran performa opsional
import { UserProvider } from "./contexts/UserContext"; // Import UserProvider untuk context

// Inisialisasi root aplikasi menggunakan React 18
const root = ReactDOM.createRoot(document.getElementById("root"));

// Pengaturan Render
const isDebugging = false; // Ubah ke `true` untuk debugging

if (isDebugging) {
  // Saat debugging, StrictMode dinonaktifkan
  root.render(
    <UserProvider>
      <App />
    </UserProvider>
  );
} else {
  // StrictMode diaktifkan untuk mode pengembangan normal
  root.render(
    <React.StrictMode>
      <UserProvider>
        <App />
      </UserProvider>
    </React.StrictMode>
  );
}

// Opsional: Pengukuran performa menggunakan Web Vitals
reportWebVitals();
