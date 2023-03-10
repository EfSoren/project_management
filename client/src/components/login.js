import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "../assets/login.css"



function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

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
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };
  const handleTestSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await loginUser({
        variables: {
          email: "guestuser@mail.com",
          password: "password",
        },
      });

      Auth.login(data.login.token);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  const SignUpButton = async (event) => {
    // window.location.assign("/sign-up")
    navigate("/sign-up")
  }

  return (
    <section className="loginForm">
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} />
        <label>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange}/>
        <div className="btnContainer">
          <button type="submit">Submit</button>
          <button onClick={handleTestSubmit}>Login as guest user</button>
          <button onClick={SignUpButton}>Sign Up</button>
        </div>
      </form>
    </section>
  );
}

export default Login;
