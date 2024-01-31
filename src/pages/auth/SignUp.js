import React from "react";
import classes from "./../auth/AuthForm.module.css";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  const navigationHandler = () => {
    navigate("/");
  };

  const onsubmit = (e) => {
    e.preventDefault();
    // dispatch(AuthAction.signIn());
    navigationHandler();
    // redirect("/");
    // return "/";
  };

  return (
    <>
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
          <input type="submit" value="Submit" />
        </div>
      </form>
    </>
  );
}

export default SignUp;
