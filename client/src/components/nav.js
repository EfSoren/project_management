import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../assets/styles.css";
import Logout from "./logout";
import auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";
function Nav() {
  // Query
  const userProfile = auth.getProfile();

  if (!userProfile) {
    window.location.assign("/");
  }
  const userID = userProfile.data._id;

  const { loading, data } = useQuery(QUERY_USER, {
    variables: { userId: userID },
  });
  if (loading) {
    return <div>Loading...</div>;
  }
  const { username, firstname, lastname, position, _id } = data?.getUser || {};
  console.log(data?.getUser);
  return (
    <>
      <nav className="nav-container">
        <div className="nav-wrapper">
          <section className="nav-header">
            <p className="psuedoImage">Image</p>
            <div className="nav-profile">
              <h1>
                {firstname} {lastname}
              </h1>
              <h2>{position}</h2>
            </div>
          </section>
          <section className="nav-link-container">
            <Link to="/home">All Projects</Link>
            <Link to="/home/create">Create Project</Link>
          </section>
          <section className="nav-logout">
            <Logout />
          </section>
        </div>
      </nav>
      <Outlet userID={userID} />
    </>
  );
}

export default Nav;
