import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { QUERY_PROJECTS, QUERY_TEST, QUERY_USER } from "../utils/queries";
function Cards() {
  const cardArray = [
    {
      title: "Group Project 1",
      manager: "Ethan Sorensen",
      notes:
        "notes, notes, notes, notes, notes, notes, notes, notes, notes, notes, ",
    },
    {
      title: "Project Demonstration",
      manager: "Jett Crowther",
      notes:
        "notes, notes, notes, notes, notes, notes, notes, notes, notes, notes, ",
    },
    {
      title: "Party Planning",
      manager: "Ethan Sorensen",
      notes:
        "notes, notes, notes, notes, notes, notes, notes, notes, notes, notes, ",
    },
    {
      title: "Production Test",
      manager: "Athena King",
      notes:
        "notes, notes, notes, notes, notes, notes, notes, notes, notes, notes, ",
    },
    {
      title: "Project Completion ",
      manager: "Matt Gaskins",
      notes:
        "notes, notes, notes, notes, notes, notes, notes, notes, notes, notes, ",
    },
  ];
  const [projects, setProjects] = useState(cardArray);
  const [count, setCount] = useState(0);
  const [sliceLow, setSliceLow] = useState(count);
  const [sliceHigh, setSlice] = useState(count + 6);
  const increaseCount = () => {
    setCount((prevCount) => prevCount + 7);
  };
  const decreaseCount = () => {
    setCount((prevCount) => prevCount - 7);
  };
  const id = "6405442e968973138d97f8e5";
  const { loading, data } = useQuery(QUERY_PROJECTS);
  /*   const { loading, data } = useQuery(QUERY_TEST); */
  /*   {
  variables: { userId: id },} */

  const thought = data?.projects || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(thought);
  function Card({ projectName, __typename, _id }) {
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
  const sliceRange = (sliceLow, sliceHigh);
  return (
    <>
      <section className="project-container">
        {thought.slice(sliceRange).map((item, index) => (
          <Card key={index} {...item} />
        ))}
        <>
          <button onClick={decreaseCount}>test</button>
          <button onClick={increaseCount}>test</button>
        </>
      </section>
    </>
  );
}

export default Cards;
