import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_PROJECT } from "../utils/mutations";
import auth from "../utils/auth";
export default function Create() {
  const userProfile = auth.getProfile();
  const teamID = userProfile.data.team;
  const [formState, setFormState] = useState({
    projectName: "",
    projectDescription: "",
    projectEndDate: "",
    teams: teamID,
  });
  const [createProject] = useMutation(CREATE_PROJECT);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await createProject({
        variables: {
          projectName: formState.projectName,
          description: formState.projectDescription,
          teams: formState.teams,
          endDate: formState.projectEndDate,
        },
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
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
