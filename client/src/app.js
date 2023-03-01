import React, { useState } from "react";
import { Nav } from "./components/nav";
import { Cards } from "./components/cards";
import { Current } from "./components/current-card";
export function App() {
  const [currentPage, setCurrentPage] = useState("All Projects");
  const handlePageChange = (page) => setCurrentPage(page);

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
    <>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </>
  );
}
