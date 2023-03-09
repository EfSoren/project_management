import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_PROJECT } from "../utils/queries";



function Current() {
  const { projectId } = useParams();
  const { loading, data } = useQuery(QUERY_PROJECT, {
    variables: { projectId },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  const project = data?.getProject || {};

  return (
    <section className="project-container">
      <h1>{project.projectName}</h1>
      <h2>{project.__typename}</h2>
      <p>{project._id}</p>
      {/* Display other project details here */}
    </section>
  );
}

export default Current;
