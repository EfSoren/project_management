import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginUser, { error, data }] = useMutation(LOGIN_USER);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    // console.log(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    // console.log(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await loginUser({
        variables: { email, password },
      });

      Auth.login(data.login.token);
    } catch (error) {
      console.log(error);
    }
  };
  const handleTestSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await loginUser({
        variables: {
          email: "mgaskins@techfriends.dev",
          password: "password07",
        },
      });

      Auth.login(data.login.token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <button onClick={handleTestSubmit}>Login as guest user</button>
      <Link to="/home/createuser">
        <button>Sign Up</button>
      </Link>
    </>
  );
}

export default Login;
