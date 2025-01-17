import React, { createContext, useContext, useState } from "react";

// Membuat context
export const AppContext = createContext();

// Hook custom untuk akses konteks
export const useAppContext = () => useContext(AppContext);

// Penyedia konteks
export const AppProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "John Doe" });
  const [reports] = useState([
    {
      date: "2024-11-20",
      name: "Maintenance",
      description: "Routine maintenance task",
      frequency: "Harian",
      jobApplication: "App 1",
      typeWork: "Repair",
      typeAttachment: "Image",
      specification: "Spec A",
      modification: "None",
      categoryJob: "Category X",
      typeJob: "Type Y",
      statusJob: "Completed",
    },
  ]);
  const [notifications] = useState(["Report Approved", "New Report Available"]);

  const logout = () => {
    console.log("User logged out");
    setUser(null);
  };

  return (
    <AppContext.Provider
      value={{
        user,
        reports, // Tidak menggunakan setReports, jadi cukup reports
        notifications, // Tidak menggunakan setNotifications, jadi cukup notifications
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
