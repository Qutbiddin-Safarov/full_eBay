import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { instance } from "../../../api/instance";
import { useNavigate, Link } from "react-router-dom";
import logo from "../../../components/images/logo.svg";
import "./Create.scss";

const Create = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name: "",
    password: "",
    email: "",
  });
  const createUser = (e) => {
    e.preventDefault();
    instance
      .post("/users", userData)
      .then((response) => {
        if (response.data.email) {
          dispatch({ email: response.data.email, type: "CREATE_USER" });
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };
  console.log(userData);

  return (
    <div className="create">
      <div className="top">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <p>
          Already a member? <Link to="/auth/login">Sign in</Link>
        </p>
      </div>
      <div className="context">
        <h2>Create an account</h2>
      </div>
      <form onSubmit={createUser}>
        <div className="names">
          <input
            className="input name"
            type="text"
            placeholder="Firstname"
            onChange={(e) => {
              setUserData({ ...userData, name: e.target.value });
            }}
          />
          <input
            className="input name"
            type="text"
            placeholder="Lastname"
            onChange={(e) => {
              setUserData({ ...userData, name: e.target.value });
            }}
          />
        </div>
        <input
          className="input large"
          type="email"
          onChange={(e) => {
            setUserData({ ...userData, email: e.target.value });
          }}
          required
          placeholder="Your email"
        />
        <input
          className="input large"
          type="password"
          onChange={(e) => {
            setUserData({ ...userData, password: e.target.value });
          }}
          required
          placeholder="Your password"
          minLength={8}
        />
        <button className="subBtn" type="submit">
          Create account
        </button>
      </form>
    </div>
  );
};

export default Create;
