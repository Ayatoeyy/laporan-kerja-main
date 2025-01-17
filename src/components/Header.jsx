<div className="app-container">
  {/* Sidebar */}
  <Sidebar />

  {/* Main Content */}
  <div className="main-content">
    {/* Header */}
    <Header />

    {/* Dashboard Content */}
    <div className="dashboard-content">
      <h1>Dashboard</h1>

      {/* Cards */}
      <div className="cards">
        <div className="card harian">
          <h3>HARIAN</h3>
          <button>View Detail</button>
        </div>
        <div className="card mingguan">
          <h3>MINGGUAN</h3>
          <button>View Detail</button>
        </div>
        <div className="card bulanan">
          <h3>BULANAN</h3>
          <button>View Detail</button>
        </div>
        <div className="card history">
          <h3>HISTORY</h3>
          <button>View Detail</button>
        </div>
      </div>

      {/* Table */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Tanggal</th>
              <th>Description</th>
              <th>Job Application</th>
              <th>Type Work</th>
              <th>Type of Attachment</th>
              <th>Specification</th>
              <th>Modification</th>
              <th>Category of Job</th>
              <th>Type Job</th>
              <th>Status Job</th>
              <th>Frequency</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>31/01/2024</td>
              <td>0001</td>
              <td>BG 4575 MM</td>
              <td>1000 kg</td>
              <td>Tanggal</td>
              <td>00:00</td>
              <td>Susan</td>
              <td>650 kg</td>
              <td>31/01/2024</td>
              <td>09:00</td>
              <td>Harian</td>
            </tr>
            {/* Data lainnya */}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
