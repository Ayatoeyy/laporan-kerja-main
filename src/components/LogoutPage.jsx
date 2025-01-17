import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const LogoutPage = () => {
  const { logout } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
   
    const timer = setTimeout(() => {
      logout();
      navigate("/login"); 
    }, 0);

    
    return () => clearTimeout(timer);
  }, [logout, navigate]);

  return (
    <div>
      <h1>Logging out...</h1>
    </div>
  );
};

export default LogoutPage;
