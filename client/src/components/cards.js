import React from "react";

function Cards() {
  function Card({ title, manager, notes }) {
    return (
      <article className="project-card">
        <h1>{title}</h1>
        <h2>{manager}</h2>
        <p>{notes}</p>
      </article>
    );
  }
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
  return (
    <section className="project-container">
      {cardArray.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </section>
  );
}

export default Cards;
