import React, { useState } from "react";
import { checkPassword, validateEmail } from "../utils/helpers";
import { CREATE_USER } from "../utils/mutations";
import { useMutation } from "@apollo/client";
export default function CreateUser() {
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    position: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [createUser] = useMutation(CREATE_USER);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (
      !validateEmail(userInfo.email) ||
      !userInfo.username ||
      !userInfo.firstname ||
      !userInfo.lastname ||
      !userInfo.password
    ) {
      setErrorMessage("Missing Input Fields");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    /* if (!checkPassword(userInfo.password)) {
      setErrorMessage(
        `Password must be between 7-14 letters and only include letters`
      );
      return;
    } */
    createUser({
      variables: {
        $username: userInfo.username,
        $firstname: userInfo.firstname,
        $lastname: userInfo.lastname,
        $email: userInfo.email,
        $password: userInfo.password,
        $position: userInfo.position,
      },
    }).then(() =>
      setUserInfo({
        username: "",
        email: "",
        password: "",
        firstname: "",
        lastname: "",
        position: "",
      })
    );
  };
  return (
    <article className="project-container">
      <form onSubmit={handleFormSubmit}>
        <input
          name="firstname"
          type="text"
          value={userInfo.firstname}
          onChange={handleInputChange}
          placeholder="First Name"
        />
        <input
          name="lastname"
          type="text"
          value={userInfo.lastname}
          onChange={handleInputChange}
          placeholder="Last Name"
        />
        <input
          name="username"
          type="text"
          value={userInfo.username}
          onChange={handleInputChange}
          placeholder="Username"
        />
        <input
          name="email"
          type="text"
          value={userInfo.email}
          onChange={handleInputChange}
          placeholder="Email"
        />
        <input
          name="password"
          type="password"
          value={userInfo.password}
          onChange={handleInputChange}
          placeholder="Password"
        />
        <input
          name="position"
          type="text"
          value={userInfo.position}
          onChange={handleInputChange}
          placeholder="Position"
        />
        <input type="submit" value="Create User" />
      </form>
    </article>
  );
}
