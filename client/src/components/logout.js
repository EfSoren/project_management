import React from "react";

function Logout() {
  const handleLogout = () => {
    localStorage.removeItem("id_token");
    window.location.assign("/");
  };

  return <button onClick={handleLogout}>Logout</button>;
}

export default Logout;
