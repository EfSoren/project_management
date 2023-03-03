import React, { useState } from "react";
import Layout from "./components/layout";
import Nav from "./components/nav";
import Cards from "./components/cards";
import Current from "./components/current_card";
import LandingPage from "./components/landing_page";
import Dashboard from "./components/dashboard";

function App() {
  const [currentPage, setCurrentPage] = useState("All Projects");
  const handlePageChange = (page) => setCurrentPage(page);

  const [loggedIn, setLoggedIn] = React.useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const renderPage = () => {
    if (currentPage === "All Projects") {
      return (
        <Cards currentPage={currentPage} handlePageChange={handlePageChange} />
      );
    }
    if (currentPage === "Single Project") {
      return <Current />;
    }
  };

  return (
    <Layout title="My Project Management App">
      {loggedIn ? (
        <>
          <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
          {renderPage()}
        </>
      ) : (
        <LandingPage onLogin={handleLogin} />
      )}
    </Layout>
  );
}

export default App;
