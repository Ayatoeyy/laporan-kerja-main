// components/TimeTrackingChart.js
import React, { useContext, useEffect, useState } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { ReportContext } from '../contexts/ReportContext';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

function TimeTrackingChart() {
  const { reports } = useContext(ReportContext);
  const [dailyData, setDailyData] = useState([]);
  const [weeklyData, setWeeklyData] = useState([]);
  const [monthlyData, setMonthlyData] = useState([]);

  useEffect(() => {
    // Mengelompokkan data berdasarkan hari, minggu, dan bulan
    const daily = reports.filter(report => report.frequency === 'Harian');
    const weekly = reports.filter(report => report.frequency === 'Mingguan');
    const monthly = reports.filter(report => report.frequency === 'Bulanan');

    setDailyData(daily);
    setWeeklyData(weekly);
    setMonthlyData(monthly);
  }, [reports]);

  // Membuat data untuk grafik harian
  const dailyChartData = {
    labels: dailyData.map(report => report.tanggal),
    datasets: [
      {
        label: 'Durasi (Jam)',
        data: dailyData.map(report => report.duration),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      }
    ]
  };

  // Membuat data untuk grafik mingguan
  const weeklyChartData = {
    labels: weeklyData.map(report => report.tanggal),
    datasets: [
      {
        label: 'Durasi (Jam)',
        data: weeklyData.map(report => report.duration),
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      }
    ]
  };

  // Membuat data untuk grafik bulanan
  const monthlyChartData = {
    labels: monthlyData.map(report => report.tanggal),
    datasets: [
      {
        label: 'Durasi (Jam)',
        data: monthlyData.map(report => report.duration),
        backgroundColor: 'rgba(255, 159, 64, 0.6)',
      }
    ]
  };

  return (
    <div className="time-tracking-chart-container">
      <h2>Time Tracking Chart</h2>
      
      {/* Grafik Harian */}
      <div className="chart">
        <h3>Grafik Harian</h3>
        <Bar data={dailyChartData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
      </div>
      
      {/* Grafik Mingguan */}
      <div className="chart">
        <h3>Grafik Mingguan</h3>
        <Line data={weeklyChartData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
      </div>

      {/* Grafik Bulanan */}
      <div className="chart">
        <h3>Grafik Bulanan</h3>
        <Pie data={monthlyChartData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
      </div>
    </div>
  );
}

export default TimeTrackingChart;
