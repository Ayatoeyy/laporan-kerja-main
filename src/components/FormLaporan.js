import React, { useState, useContext } from "react";
import axios from "axios";
import { ReportContext } from "../contexts/ReportContext";
import "./FormLaporan.css";

const FormLaporan = () => {
  const { addReport } = useContext(ReportContext); // Mengambil fungsi addReport dari context

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    title: "",
    jobApplication: "",
    typeOfWork: "",
    typeOfAttachment: "",
    specification: "",
    modification: "",
    categoryOfJob: "",
    typeOfJob: "",
    statusOfJob: "",
    frekuensi: "Harian",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validasi data
    if (!formData.firstName || !formData.lastName || !formData.title) {
      alert("Nama Depan, Nama Belakang, dan Judul wajib diisi!");
      return;
    }

    // Data laporan baru
    const newReport = {
      id: Date.now(), // ID unik berdasarkan timestamp
      tanggal: new Date().toLocaleDateString(), // Tanggal saat ini
      description: `${formData.firstName} ${formData.lastName}`, // Deskripsi sederhana
      ...formData, // Semua data dari form
    };

    try {
      // Kirim data ke server (backend)
      await axios.post("http://localhost:5000/api/laporan", newReport);

      // Tambahkan laporan ke context untuk memperbarui data di History Laporan
      addReport(newReport);

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        title: "",
        jobApplication: "",
        typeOfWork: "",
        typeOfAttachment: "",
        specification: "",
        modification: "",
        categoryOfJob: "",
        typeOfJob: "",
        statusOfJob: "",
        frekuensi: "Harian",
      });

      alert("Laporan berhasil ditambahkan!");
    } catch (error) {
      console.error("Error:", error);
      alert("Terjadi kesalahan saat menyimpan data.");
    }
  };

  return (
    <div className="form-container">
      <h1>Form Laporan</h1>
      <form onSubmit={handleSubmit}>
        {/* Input Nama */}
        <div className="form-group">
          <label>Nama:</label>
          <div className="name-fields">
            <input
              type="text"
              name="firstName"
              placeholder="Nama Depan"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Nama Belakang"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        {/* Input Title */}
        <div className="form-group">
          <label>Description:</label>
          <input
            type="text"
            name="title"
            placeholder="Masukkan Judul Pekerjaan"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Input Baris 1 */}
        <div className="form-row">
          <div className="form-group">
            <label>Job Application:</label>
            <input
              type="text"
              name="jobApplication"
              value={formData.jobApplication}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Type of Work:</label>
            <input
              type="text"
              name="typeOfWork"
              value={formData.typeOfWork}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Input Baris 2 */}
        <div className="form-row">
          <div className="form-group">
            <label>Type of Attachment:</label>
            <input
              type="text"
              name="typeOfAttachment"
              value={formData.typeOfAttachment}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Specification:</label>
            <input
              type="text"
              name="specification"
              value={formData.specification}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Input Baris 3 */}
        <div className="form-row">
          <div className="form-group">
            <label>Modification:</label>
            <input
              type="text"
              name="modification"
              value={formData.modification}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Category of Job:</label>
            <input
              type="text"
              name="categoryOfJob"
              value={formData.categoryOfJob}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Input Baris 4 */}
        <div className="form-row">
          <div className="form-group">
            <label>Type of Job:</label>
            <input
              type="text"
              name="typeOfJob"
              value={formData.typeOfJob}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Status of Job:</label>
            <input
              type="text"
              name="statusOfJob"
              value={formData.statusOfJob}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Input Frequency */}
        <div className="form-group">
          <label>Frekuensi:</label>
          <select
            name="frekuensi"
            value={formData.frekuensi}
            onChange={handleInputChange}
          >
            <option value="Harian">Harian</option>
            <option value="Mingguan">Mingguan</option>
            <option value="Bulanan">Bulanan</option>
          </select>
        </div>

        {/* Tombol Submit */}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormLaporan;
