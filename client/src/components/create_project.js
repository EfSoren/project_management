import React, { useState } from "react";

export default function Create() {
  const [projectName, setProjectName] = useState("");
  const [projectManager, setProjectManager] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectEndDate, setProjectEndDate] = useState("");
  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "projectName") {
      setProjectName(inputValue);
    } else if (inputType === "projectManager") {
      setProjectManager(inputValue);
    } else if (inputType === "projectDescription") {
      setProjectDescription(inputValue);
    } else if (inputType === "projectEndDate") {
      setProjectEndDate(inputValue);
    }
  };
  /*  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(projectName === ""){
        alert("Project title cannot be empty")
    }

 } */
  return (
    <article className="project-container">
      <form>
        <input
          value={projectName}
          name="projectName"
          type="text"
          onChange={handleInputChange}
          placeholder="Project Name"
        ></input>
        <input
          value={projectManager}
          name="projectManager"
          type="text"
          onChange={handleInputChange}
          placeholder="Manager"
        ></input>
        <input
          value={projectDescription}
          name="projectDescription"
          type="text"
          onChange={handleInputChange}
          placeholder="Description"
        ></input>
        <input
          value={projectEndDate}
          name="projectEndDate"
          type="date"
          onChange={handleInputChange}
          placeholder="Deadline"
        ></input>

        <input type="submit" placeholder={"End Date"}></input>
      </form>
    </article>
  );
}
