import React from "react";
import "../assets/styles.css";

function Nav({ currentPage, handlePageChange }) {
  return (
    <nav className="nav-container">
      <div className="nav-wrapper">
        <section className="nav-header">
          <p className="psuedoImage">Image</p>
          <div className="nav-profile">
            <h1>Ethan Sorensen</h1>
            <h2>Manager</h2>
          </div>
        </section>
        <section className="nav-link-container">
          <a href="#all" onClick={() => handlePageChange("All Projects")} className={currentPage === "All Projects" ? "active" : ""}>
            All Projects
          </a>
          <a href="#single" onClick={() => handlePageChange("Single Project")} className={currentPage === "Single Project" ? "active" : ""}>
            Single Project
          </a>
        </section>
      </div>
    </nav>
  );
}

export default Nav;
