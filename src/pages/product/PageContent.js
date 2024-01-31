import React from "react";
import classes from "./PageContent.module.css"

const PageContent = ({ title, children }) => {
  return (
    <div className={classes.content}>
      <h1  style={{color:"black"}}>{title}</h1>
      {children}
    </div>
  );
};

export default PageContent;
