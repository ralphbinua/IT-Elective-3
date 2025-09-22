import React from "react";
import { useState } from "react";

const CreateAccount = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Account created");

    try {
      await axios.post("http://localhost:5173/api/signup", {
        username,
        email,
      });
    } catch (error) {}
  };

  return (
    <div>
      <h1>Create Account Page</h1>

      <p>Form to create a new account will go here.</p>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          name="username"
          required
        />
        <br />
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          required
        />
        <br />
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default CreateAccount;
