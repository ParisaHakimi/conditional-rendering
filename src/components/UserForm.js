import React, { useState } from "react";

const UserForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasBeenSubmittes, setHasBeenSubmittes] = useState(false);

  const createUser = (e) => {
    e.preventDefault();
    const newUser = { username, email, password };
    setUsername("");
    setEmail("");
    setPassword("");
    setHasBeenSubmittes(true);
  };

  return (
    <form action="" onSubmit={createUser}>
      {hasBeenSubmittes ? (
        <h3>Thank you for submitting the form</h3>
      ) : (
        <h3>Welcome, please submit the form.</h3>
      )}
      <div>
        <label htmlFor="">Username: </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="">Email Address: </label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="">Password: </label>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <input type="submit" />
    </form>
  );
};

export default UserForm;
