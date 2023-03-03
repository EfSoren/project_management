import React, { useState } from "react";
import Layout from "./Layout";
import Nav from "./Nav";
import Cards from "./Cards";
import Current from "./Current";
import LandingPage from "./LandingPage";
import Dashboard from "./Dashboard";

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
