import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "../../redux/userRedux";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isFetching, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const Login = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    await axios.get("http://localhost:8080/users").then((res) => {
      const user = res.data.find(
        (user) => user.email === email && user.password === password
      );
      user ? dispatch(loginSuccess(user)) : dispatch(loginFailure());
    });
  };
  return (
    <div className="loginContainer">
      <div className="loginWrapper">
        <h1>Sign in</h1>
        <form action="" className="loginForm" onSubmit={Login}>
          <input
            type="text"
            placeholder="email"
            className="loginFormInput"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            className="loginFormInput"
            onChange={(e) => setPassword(e.target.value)}
          />
          <span>{error && "incorrect credentials"}</span>
          <button
            type="submit"
            className="loginFormButton"
            // disabled={isFetching}
          >
            LOGIN
          </button>
          <a href="" className="loginFormLink">
            Forgot password?
          </a>
          <a href="" className="loginFormLink">
            Register
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
