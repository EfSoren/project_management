import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_PROJECT } from "../utils/mutations";

export default function Create() {
  const [formState, setFormState] = useState({
    projectName: "",
    projectManager: "",
    projectDescription: "",
    projectEndDate: "",
    teamId: "",
  });

  const [createProject] = useMutation(CREATE_PROJECT);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createProject({ variables: formState }).then(() =>
      setFormState({
        projectName: "",
        projectManager: "",
        projectDescription: "",
        projectEndDate: "",
        teamId: "",
      })
    );
  };

  return (
    <article className="project-container">
      <form onSubmit={handleSubmit}>
        <input
          name="projectName"
          type="text"
          value={formState.projectName}
          onChange={handleInputChange}
          placeholder="Project Name"
        />
        <input
          name="projectManager"
          type="text"
          value={formState.projectManager}
          onChange={handleInputChange}
          placeholder="Manager"
        />
        <input
          name="projectDescription"
          type="text"
          value={formState.projectDescription}
          onChange={handleInputChange}
          placeholder="Description"
        />
        <input
          name="projectEndDate"
          type="date"
          value={formState.projectEndDate}
          onChange={handleInputChange}
          placeholder="Deadline"
        />
        <input type="submit" value="Create Project" />
      </form>
    </article>
  );
}
