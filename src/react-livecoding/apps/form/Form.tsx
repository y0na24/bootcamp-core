import { useState } from "react";

export function Form() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {};

  return (
    <form className="form" onSubmit={(e) => e.preventDefault()}>
      <input
        onChange={handleNameChange}
        onClick={handleNameChange}
        placeholder="name"
      ></input>
      <input onChange={handlePasswordChange} placeholder="password"></input>
      <input onChange={handleEmailChange} placeholder="email"></input>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}
