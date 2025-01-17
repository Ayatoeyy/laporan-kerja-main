import React from "react";
import { useReportContext } from "../contexts/ReportContext";

const TableLaporan = () => {
  const { reports } = useReportContext();

  return (
    <div>
      <h2>Laporan Kerja</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Tanggal</th>
            <th>Nama</th>
            <th>Title</th>
            <th>Job Application</th>
            <th>Type of Work</th>
            <th>Type of Attachment</th>
            <th>Specification</th>
            <th>Modification</th>
            <th>Category of Job</th>
            <th>Type of Job</th>
            <th>Status Job</th>
            <th>Frequency</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report, index) => (
            <tr key={index}>
              <td>{report.tanggal}</td>
              <td>{report.nama}</td>
              <td>{report.title}</td>
              <td>{report.jobApplication}</td>
              <td>{report.typeWork}</td>
              <td>{report.typeOfAttachment}</td>
              <td>{report.specification}</td>
              <td>{report.modification}</td>
              <td>{report.categoryOfJob}</td>
              <td>{report.typeJob}</td>
              <td>{report.statusJob}</td>
              <td>{report.frequency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableLaporan;
