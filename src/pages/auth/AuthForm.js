import React from "react";
import classes from "./../auth/AuthForm.module.css";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import * as AuthAction from "../../redux/action/auth-action";

function AuthForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navigationHandler = () => {
    navigate("/");
  };

  const onsubmit = (e) => {
    e.preventDefault();
    dispatch(AuthAction.signIn());
    navigationHandler();
  };

  return (
    <>
      <h1 style={{ color: "black", textAlign: "center", margin: "auto" }}>
        AuthForm
      </h1>
      <form onSubmit={onsubmit} className={classes.form}>
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="text" name="email" />
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <input id="password" type="text" name="password" />
        </p>
        <div className={classes.actions}>
          <Link to="/signUp">SignUp</Link>
          <input type="submit" value="Submit" />
          {/* <button>Logout</button> */}
        </div>
      </form>
    </>
  );
}

export default AuthForm;
