import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("id_token");
    // window.location.assign("/");
    navigate("/");
  };

  return <button onClick={handleLogout}>Logout</button>;
}

export default Logout;
