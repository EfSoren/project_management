import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_PROJECT } from "../utils/queries";
import "../assets/single_project.css";
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
  console.log(createdAtTime, enddateAtTime);
  const convertCreated = new Date(createdAtTime);
  const convertEndDate = new Date(enddateAtTime);
  console.log(convertCreated, convertEndDate);
  console.log(convertCreated.toLocaleDateString("en-US"));
  console.log(convertEndDate.toLocaleDateString("en-US"));
  const localCreate = convertCreated.toLocaleDateString("en-US");
  const localEnd = convertEndDate.toLocaleDateString("en-US");

  // const createTimestamp = new Date().getTime(project.createdAt);
  // const createdTime = new Date(createTimestamp);
  // const endTimestamp = new Date().getTime(project.endDate);
  // const endTime = new Date(endTimestamp);
  // console.log(
  //   `${createdTime.getDate()}/${
  //     createdTime.getMonth() + 1
  //   }/${createdTime.getFullYear()}`
  // );
  // console.log(project);

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
        Created on: {createdTime.getMonth() + 1}/{createdTime.getDate()}/
        {createdTime.getFullYear()}{" "}
      </p>
      <p>
        Project Deadline: {endTime.getMonth() + 1}/{endTime.getDate()}/
        {endTime.getFullYear()}{" "}
      </p>
      <p>{project._id}</p>
      {/* Display other project details here */}
    </section>
  );
}

export default Current;
