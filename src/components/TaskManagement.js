import React, { useEffect, useState } from "react";

const TaskManagement = () => {
  // Hapus setExampleTasks jika tidak digunakan
  const [exampleTasks] = useState([
    {
      id: 1,
      name: "Pemeliharaan Mesin",
      category: "Pemeliharaan",
      description: "Pengecekan rutin mesin.",
      progress: 50,
    },
    {
      id: 2,
      name: "Perbaikan Rem",
      category: "Perbaikan",
      description: "Mengganti kampas rem.",
      progress: 75,
    },
  ]);

  // Jika exampleTasks tidak perlu menjadi dependensi, gunakan komentar eslint
  useEffect(() => {
    console.log("Tasks loaded:", exampleTasks);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <h1>Task Management</h1>
      <ul>
        {exampleTasks.map((task) => (
          <li key={task.id}>
            {task.name} - {task.category} - Progress: {task.progress}%
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManagement;
