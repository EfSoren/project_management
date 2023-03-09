import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { QUERY_USER, QUERY_TEAM } from "../utils/queries";
import auth from "../utils/auth";


function Cards() {
  const linkStyle = { textDecorationLine: "none", textDecoration: "none"}
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
    return <div id="loading">Loading...</div>;
  }

  const projects = teamData?.getTeam.project || [];
  console.log(projects);

  function Card({ _id, projectName, __typename }) {
    const ProjectCardBtn = async (event) => {
      window.location.assign(`/home/${_id}`)
    }

    return (
        <article className="project-card" onClick={ProjectCardBtn}>
          <h1 style={linkStyle}>{projectName}</h1>
          <h2>{__typename}</h2>
          <p>{_id}</p>
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
