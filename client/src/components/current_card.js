import React, { useEffect, useState } from "react";

function Current() {
  const [currentProject, setCurrentProject] = useState({});
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setCurrentProject(json);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <section className="project-container">
      <h1>{currentProject.name}</h1>
      <h1>{currentProject.email}</h1>
      <h1>{currentProject.username}</h1>
      <h1>{currentProject.id}</h1>
    </section>
  );
}

export default Current;
