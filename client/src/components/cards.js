import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";
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

  const { loading, data } = useQuery(QUERY_USER);

  const thought = data?.getUser || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(thought);
  function Card({ firstname, lastname, _id }) {
    return (
      <article className="project-card">
        <h1>{firstname}</h1>
        <h2>{lastname}</h2>
        <p>{_id}</p>
      </article>
    );
  }

  return (
    <>
      <section className="project-container">
        {thought.slice(0, 6).map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </section>
      <button>test</button>
    </>
  );
}

export default Cards;
