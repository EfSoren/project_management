import React, { useState } from "react";
/* import axios from 'axios';
 */
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    /* try {
      const response = await axios.post('/api/login', { email, password });
      localStorage.setItem('authToken', response.data.token);
      window.location.href = '/home';
    } catch (error) {
      console.log(error);
    } */
  };

  return (
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
  );
}

export default Login;
