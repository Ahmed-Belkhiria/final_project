import axios from "axios";
import React, { useState } from "react";
import "./register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [currentUser, setCurrentUser] = useState();
  const [error, setError] = useState("");

  const Register = async (e) => {
    e.preventDefault();
    setError("");
    if (password == confirmPassword) {
      const user = { name, surname, email, password };
      await axios.post("http://localhost:8080/users", user).then((res) => {
        console.log(res);
        window.location.href = "/login";
      });
    } else {
      setError("Passwords don't match");
    }
  };
  return (
    <div className="registerContainer">
      <div className="registerWrapper">
        <h1>Register</h1>
        <form action="" className="registerForm" onSubmit={Register}>
          <input
            type="text"
            placeholder="name"
            className="registerFormInput"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="surname"
            className="registerFormInput"
            onChange={(e) => setSurname(e.target.value)}
          />
          <input
            type="text"
            placeholder="email"
            className="registerFormInput"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            className="registerFormInput"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm password"
            className="registerFormInput"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button className="registerFormButton">REGISTER</button>
          <a href="" className="registerFormLink">
            Forgot password?
          </a>
          <a href="/login" className="registerFormLink">
            Login
          </a>
        </form>
      </div>
    </div>
  );
};

export default Register;
