import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../assets/styles.css";

function Nav() {
  return (
    <>
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
            <p>
              <Link to="/home"> All Projects</Link>
            </p>
            <p>
              <Link to="/home/single"> Single Project</Link>
            </p>
          </section>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Nav;
