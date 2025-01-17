import React from "react";

const TaskManagement = () => {
  console.log("TaskManagement component rendered");

  return (
    <div className="task-management">
      <h2>Daftar Tugas Mekanik</h2>
      <div className="task-list">
        <div className="card">
          <h5>Tugas 1</h5>
          <p>Deskripsi tugas 1</p>
        </div>
      </div>
    </div>
  );
};

export default TaskManagement;
