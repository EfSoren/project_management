import React from "react";
import { Link, Outlet } from "react-router-dom";
// import Logout from "./logout";
import auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";
import profileImg from "../assets/images/profile.jpg"

function Nav() {
  // Query
  const userProfile = auth.getProfile();

  const handleLogout = () => {
    localStorage.removeItem("id_token");
    window.location.assign("/");
  };

  if (!userProfile) {
    window.location.assign("/");
  }
  const userID = userProfile.data._id;

  const { loading, data } = useQuery(QUERY_USER, {
    variables: { userId: userID },
  });
  if (loading) {
    return <div id="Loading">Loading...</div>;
  }
  const { username, firstname, lastname, position, _id } = data?.getUser || {};
  console.log(data?.getUser);
  return (
    <>
      <nav className="nav-container">
        <div className="nav-wrapper">
          <section className="nav-header">
            <img src={profileImg} className="profileImg" alt=".."/>
            <h2 className="profileInfo">{firstname} {lastname}</h2>
            <h3 className="profileInfo">{position}</h3> 
          </section>
          <section className="nav-link-container">
            <Link to="/home">All Projects</Link>
            <Link to="/home/create">Create Project</Link>
            <button onClick={handleLogout}>Logout</button>
          </section>
        </div>
      </nav>
      <Outlet userID={userID} />
    </>
  );
}

export default Nav;
