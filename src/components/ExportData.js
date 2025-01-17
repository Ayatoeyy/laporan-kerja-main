import React from "react";
import { useReportContext } from "../contexts/ReportContext";

const ExportData = () => {
  const { reports } = useReportContext(); 

  const handlePrint = (report) => {
    
    const printContent = `
      <html>
        <head>
          <title>Print Data</title>
        </head>
        <body>
          <h2>Data Laporan</h2>
          <table border="1" style="border-collapse: collapse; width: 100%;">
            <tr>
              <th>Tanggal</th>
              <td>${report.tanggal}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>${report.title}</td>
            </tr>
            <tr>
              <th>Job Application</th>
              <td>${report.jobApplication}</td>
            </tr>
            <tr>
              <th>Type Work</th>
              <td>${report.typeWork}</td>
            </tr>
            <tr>
              <th>Type of Attainment</th>
              <td>${report.typeAttain}</td>
            </tr>
            <tr>
              <th>Specification</th>
              <td>${report.specification}</td>
            </tr>
            <tr>
              <th>Modification</th>
              <td>${report.modification}</td>
            </tr>
            <tr>
              <th>Category of Job</th>
              <td>${report.categoryJob}</td>
            </tr>
            <tr>
              <th>Type Job</th>
              <td>${report.typeJob}</td>
            </tr>
            <tr>
              <th>Status Job</th>
              <td>${report.statusJob}</td>
            </tr>
          </table>
        </body>
      </html>
    `;

    const printWindow = window.open("", "_blank");
    printWindow.document.write(printContent);
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Export Data</h2>
      <table className="table table-bordered table-striped text-center">
        <thead className="table-primary">
          <tr>
            <th>Tanggal</th>
            <th>Nama</th>
            <th>Description</th>
            <th>Job Application</th>
            <th>Type Work</th>
            <th>Type of Attainment</th>
            <th>Specification</th>
            <th>Modification</th>
            <th>Category of Job</th>
            <th>Type Job</th>
            <th>Status Job</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {reports.length > 0 ? (
            reports.map((report, index) => (
              <tr key={index}>
                <td>{report.tanggal}</td>
                <th>{report.name}</th>
                <td>{report.title}</td>
                <td>{report.jobApplication}</td>
                <td>{report.typeWork}</td>
                <td>{report.typeAttain}</td>
                <td>{report.specification}</td>
                <td>{report.modification}</td>
                <td>{report.categoryJob}</td>
                <td>{report.typeJob}</td>
                <td>{report.statusJob}</td>
                <td>
                  <button
                    className="btn btn-sm btn-pink"
                    onClick={() => handlePrint(report)}
                  >
                    Print
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="11">Tidak ada data untuk diekspor.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ExportData;
