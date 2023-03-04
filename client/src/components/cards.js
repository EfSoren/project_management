import React, { useState, useEffect } from "react";

function Cards() {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);

        console.log(projects);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
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
  function Card({ title, manager, notes }) {
    return (
      <article className="project-card">
        <h1>{title}</h1>
        <h2>{manager}</h2>
        <p>{notes}</p>
      </article>
    );
  }
  return (
    <section className="project-container">
      {projects.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </section>
  );
}

export default Cards;
