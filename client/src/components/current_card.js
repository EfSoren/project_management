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
  const createdAtTime = Number(project.createdAt);
  const enddateAtTime = Number(project.endDate);

  const convertCreated = new Date(createdAtTime);
  const convertEndDate = new Date(enddateAtTime);
 
  const localCreate = convertCreated.toLocaleDateString("en-US");
  const localEnd = convertEndDate.toLocaleDateString("en-US");

  const checkDes = () => {
    if (!project.description) {
      const projDescription = "No description provided";
      return <h2>{projDescription}</h2>;
    } else {
      const projDescription = project.description;
      return <h3>{projDescription}</h3>;
    }
  };

  console.log(project.teams[0].users[0]);
  const teamList = project.teams[0].users;
  function Team({ firstname, lastname }) {
    return (
      <li>
        {" "}
        {firstname} {lastname}
      </li>
    );
  }
  return (
    <section className="single-project-wrapper">
      <h1 className="single-project-title">{project.projectName}</h1>
      {checkDes()}
      <p>
        Created on: {localCreate}
      </p>
      <p>
        Project Deadline: {localEnd}
      </p>
      <p>{project._id}</p>
    </section>
  );
}

export default Current;
