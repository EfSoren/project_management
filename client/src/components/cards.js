import React from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { QUERY_PROJECTS } from "../utils/queries";

function Cards() {
  const { loading, data } = useQuery(QUERY_PROJECTS);

  if (loading) {
    return <div>Loading...</div>;
  }

  const projects = data?.projects || [];

  function Card({ _id, projectName, __typename }) {
    return (
      <Link to={`/home/${_id}`}>
        <article className="project-card">
          <h1>{projectName}</h1>
          <h2>{__typename}</h2>
          <p>{_id}</p>
        </article>
      </Link>
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
