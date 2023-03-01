import React from "react";
import "../assets/styles.css";
export function Nav({ currentPage, handlePageChange }) {
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
          <a href="#all" onClick={() => handlePageChange("All Projects")}>
            All Projects
          </a>
          <a href="#nowhere">Test Link</a>
          <a href="#nowhere">Test Link</a>
          <a href="#nowhere">Test Link</a>
          <a href="#nowhere">Test Link</a>
        </section>
      </div>
    </nav>
  );
}
