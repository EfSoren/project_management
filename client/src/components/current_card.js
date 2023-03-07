import React, { useEffect, useState } from "react";
import { QUERY_PROJECT } from "../utils/queries";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
function Current() {
  const [currentProject, setCurrentProject] = useState({});
  const { test } = useParams();
  console.log("test :>> ", test);
  const id = test;
  const { loading, data } = useQuery(QUERY_PROJECT, {
    variables: { projectId: id },
  });

  const thought = data?.getProject || {};
  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(thought);
  return (
    <section className="project-container">
      <h1>{thought.projectName}</h1>
      <h1>{thought.__typename}</h1>
      <h1>{thought._id}</h1>
    </section>
  );
}

export default Current;
