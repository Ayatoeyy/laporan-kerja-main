import React, { useState } from "react";
import { useAppContext } from "../context/AppContext"; 
import { useNavigate } from "react-router-dom";
import "./Dashboard.css"; 

const Dashboard = () => {
  const { user, reports } = useAppContext(); 
  const navigate = useNavigate();

  const [selectedType, setSelectedType] = useState(null);

 
  const filteredReports =
    selectedType === "Harian"
      ? reports.filter((report) => report.frequency === "Harian")
      : selectedType === "Mingguan"
      ? reports.filter((report) => report.frequency === "Mingguan")
      : selectedType === "Bulanan"
      ? reports.filter((report) => report.frequency === "Bulanan")
      : reports; 

  return (
    <div className="dashboard-container">
      {/* Header */}
      <div className="dashboard-header">
        <h1>Welcome to the Dashboard</h1>
        {user ? (
          <p>Hello, {user.name}!</p>
        ) : (
          <p>Please log in to see your data.</p>
        )}
      </div>

      {/* Dashboard Cards */}
      <div className="dashboard-cards">
        <div className="card primary-card" onClick={() => setSelectedType("Harian")}>
          <h3>HARIAN</h3>
          <p>{reports.filter((report) => report.frequency === "Harian").length}</p>
          <button>View Details</button>
        </div>
        <div className="card warning-card" onClick={() => setSelectedType("Mingguan")}>
          <h3>MINGGUAN</h3>
          <p>{reports.filter((report) => report.frequency === "Mingguan").length}</p>
          <button>View Details</button>
        </div>
        <div className="card success-card" onClick={() => setSelectedType("Bulanan")}>
          <h3>BULANAN</h3>
          <p>{reports.filter((report) => report.frequency === "Bulanan").length}</p>
          <button>View Details</button>
        </div>
        <div className="card danger-card" onClick={() => navigate("/histori-laporan")}>
          <h3>HISTORY</h3>
          <button>View Details</button>
        </div>
      </div>

      {/* Table Data */}
      <div className="table-container">
        <h2>{selectedType ? `Reports - ${selectedType}` : "All Reports"}</h2>
        <table>
          <thead>
            <tr>
              <th>Tanggal</th>
              <th>Name</th>
              <th>Description</th>
              <th>Job Application</th>
              <th>Type Work</th>
              <th>Type of Attachment</th>
              <th>Specification</th>
              <th>Modification</th>
              <th>Category of Job</th>
              <th>Type Job</th>
              <th>Status Job</th>
            </tr>
          </thead>
          <tbody>
            {filteredReports.length > 0 ? (
              filteredReports.map((report, index) => (
                <tr key={index}>
                  <td>{report.date}</td>
                  <td>{report.name}</td>
                  <td>{report.description}</td>
                  <td>{report.jobApplication}</td>
                  <td>{report.typeWork}</td>
                  <td>{report.typeAttachment}</td>
                  <td>{report.specification}</td>
                  <td>{report.modification}</td>
                  <td>{report.categoryJob}</td>
                  <td>{report.typeJob}</td>
                  <td>{report.statusJob}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="11">No reports available for the selected type.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
