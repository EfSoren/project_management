import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_USER, QUERY_TEAM } from "../utils/queries";
import { Link, Navigate, useNavigate } from "react-router-dom";
import auth from "../utils/auth";

function Cards() {
  const navigate = useNavigate();
  const linkStyle = { textDecorationLine: "none", textDecoration: "none" };
  const [tokenId, setTokenId] = useState("");
  const [teamId, setTeamId] = useState("");
  /* const [getUser] = useQuery(QUERY_USER); */

  const tokenInfo = async () => {
    const tokenData = await auth.getProfile();
    setTokenId(tokenData.data._id);
  };
  tokenInfo();
  const { loading: userLoading, data: userData } = useQuery(QUERY_USER, {
    variables: { userId: tokenId },
  });

  const team = userData?.getUser.team || "";
  console.log(team);
  const { loading, data: teamData } = useQuery(QUERY_TEAM, {
    variables: { teamId: team },
  });

  if (loading) {
    return <div id="Loading">Loading...</div>;
  }

  function formatDate(date) {
    const convertNum = Number(date);
    const convertDate = new Date(convertNum);
    const convertLocal = convertDate.toLocaleDateString("en-US");
    console.log(convertLocal);
    return convertLocal
  }

  const projects = teamData?.getTeam.project || [];
  console.log(projects);
  const testDate = formatDate(projects[0].endDate);

  function Card({ _id, projectName, endDate, __typename, description }) {
    const ProjectCardBtn = async (event) => {
      // window.location.assign(`/home/${_id}`);
      navigate(`/home/${_id}`)
    };

    return (
      <article className="project-card" onClick={ProjectCardBtn}>
        <h1 style={linkStyle}>{projectName}</h1>
        <h2>{description}</h2>
        <p>Due Date: {formatDate(endDate)}</p>
      </article>
    );
  }

  return (
    <section className="project-container">
      {projects.slice(0, 6).map((project) => (
        <Card key={project._id} {...project} />
      ))}
    </section>
  );
}

export default Cards;
