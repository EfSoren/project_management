import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_PROJECT } from "../utils/mutations";

export default function Create() {
  const [projectName, setProjectName] = useState("");
  const [projectManager, setProjectManager] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectEndDate, setProjectEndDate] = useState("");
  const [team, setTeam] = useState("");
  const [teamId, setTeamId] = useState("");

  const [createProject] = useMutation(CREATE_PROJECT);

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

  const handleSubmit = (e) => {
    e.preventDefault();
  
    createProject({
      variables: {
        name: projectName,
        manager: projectManager,
        description: projectDescription,
        endDate: projectEndDate,
        teamId: teamId,
      },
    }).then(() => {
      setProjectName("");
      setProjectManager("");
      setProjectDescription("");
      setProjectEndDate("");
      setTeam("");
      setTeamId("");
    });
  };
  

  return (
    <article className="project-container">
      <form onSubmit={handleSubmit}>
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

        <input type="submit" value="Create Project"></input>
      </form>
    </article>
  );
}
