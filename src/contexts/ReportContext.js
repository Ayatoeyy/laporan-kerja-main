// src/contexts/ReportContext.js
import React, { createContext, useContext, useState } from "react";

// Membuat context untuk laporan
export const ReportContext = createContext();

// Provider untuk ReportContext
export const ReportProvider = ({ children }) => {
  const [reports, setReports] = useState([]); // State untuk menyimpan semua laporan

  // Fungsi untuk menambahkan laporan baru ke state
  const addReport = (newReport) => {
    if (!newReport.tanggal || !newReport.title) {
      // Validasi data penting yang diperlukan
      console.error("Data laporan tidak lengkap! Pastikan tanggal dan judul ada.");
      return;
    }

    setReports((prevReports) => [...prevReports, newReport]);
  };

  return (
    <ReportContext.Provider value={{ reports, addReport }}>
      {children}
    </ReportContext.Provider>
  );
};

// Custom hook untuk menggunakan ReportContext dengan lebih mudah
export const useReportContext = () => {
  const context = useContext(ReportContext);
  if (!context) {
    throw new Error("useReportContext harus digunakan dalam ReportProvider");
  }
  return context;
};
