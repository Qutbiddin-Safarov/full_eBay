import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../components/images/logo.svg";
import "./Login.scss";

const Login = () => {
  return (
    <div>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <div>
        <form onSubmit={console.log()} className="log">
          <h2>Hello</h2>
          <p>
            Sign in to eBay or <Link to="/auth/create">create an account</Link>
          </p>
          <input type="text" placeholder="Email or username" />
          <button type="submit">Continue</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
