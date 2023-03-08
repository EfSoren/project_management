import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../assets/styles.css";
import Logout from "./logout";

function Nav() {
  // Query

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
            <Link to="/home">All Projects</Link>
            <Link to="/home/single">Single Project</Link>
            <Link to="/home/open">Status Project</Link>
            <Link to="/home/create">Create Project</Link>
          </section>
          <section className="nav-logout">
            <Logout />
          </section>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Nav;
