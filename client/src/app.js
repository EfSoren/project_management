import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Nav from "./components/nav";
import Cards from "./components/cards";
import Current from "./components/current_card";
import LandingPage from "./components/landing_page";
import Dashboard from "./components/dashboard";

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  /* const renderPage = () => {
    if (currentPage === "All Projects") {
      return (
        <Cards currentPage={currentPage} handlePageChange={handlePageChange} />
      );
    }
    if (currentPage === "Single Project") {
      return <Current />;
    }
  }; */

  /*  return (
    <>

      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </>
  );
  */
  return (
    <Routes>
      <Route path="/home" element={<Nav />}>
        <Route index element={<Cards />} />
        <Route path="single" element={<Current />} />
      </Route>
    </Routes>
  );
}

export default App;
