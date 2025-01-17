import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./History.css"; 

const HistoryLaporan = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDepartment, setFilterDepartment] = useState("");
  const [filterDate, setFilterDate] = useState("");

  const reports = [
    {
      tanggal: "31/01/2024",
      description: "0001",
      application: "BG 4575 MM",
      typeWork: "1000 kg",
      typeAttachment: "31/01/2024",
      specification: "00:00",
      modification: "Susan",
      category: "650 kg",
      typeJob: "31/01/2024",
      statusJob: "09:00",
    },
    {
      tanggal: "1/02/2024",
      description: "Record Kendaraan No.",
      application: "MM No.",
      typeWork: "Timbang 1",
      typeAttachment: "Tanggal",
      specification: "Jam",
      modification: "Operator",
      category: "Timbang II",
      typeJob: "2/02/2024",
      statusJob: "Jam",
    },
  ];

  const handleSearch = () => {
    // Implementasi filter berdasarkan searchTerm dan filterDate
  };

  return (
    <div className="history-container">
      <div className="sidebar">
        <div className="profile">
          <div className="profile-icon">Hai Nana</div>
        </div>
        <ul className="menu">
          <li>Dashboard</li>
          <li>Form Laporan</li>
          <li>Histori Laporan</li>
          <li>Export Data</li>
          <li>Logout</li>
        </ul>
      </div>
      <div className="history-content">
        <div className="header">
          <h2>History</h2>
          <p>Form Laporan</p>
        </div>
        <div className="filters row mt-4">
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Keyword"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <select
              className="form-select"
              value={filterDepartment}
              onChange={(e) => setFilterDepartment(e.target.value)}
            >
              <option value="">BY Department</option>
              <option value="Dept 1">Dept 1</option>
              <option value="Dept 2">Dept 2</option>
            </select>
          </div>
          <div className="col-md-3">
            <input
              type="date"
              className="form-control"
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
            />
          </div>
          <div className="col-md-1">
            <button className="btn btn-primary" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
        <table className="table table-striped mt-4">
          <thead>
            <tr>
              <th>Tanggal</th>
              <th>Description</th>
              <th>Job Application</th>
              <th>Type Work</th>
              <th>Type Attachment</th>
              <th>Specification</th>
              <th>Modification</th>
              <th>Category of Job</th>
              <th>Type Job</th>
              <th>Status Job</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report, index) => (
              <tr key={index}>
                <td>{report.tanggal}</td>
                <td>{report.description}</td>
                <td>{report.application}</td>
                <td>{report.typeWork}</td>
                <td>{report.typeAttachment}</td>
                <td>{report.specification}</td>
                <td>{report.modification}</td>
                <td>{report.category}</td>
                <td>{report.typeJob}</td>
                <td>{report.statusJob}</td>
                <td>
                  <button className="btn btn-primary btn-sm">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistoryLaporan;
