import React, { useEffect } from "react";
import classes from "./Cockpit.css";

const cockpit = (props) => {
  useEffect(() => {
    console.log("[cockpit.js] useEffect- request to songkick");
    const timer = setTimeout(() => {
      alert("returned data");
    }, 1000);
    return () => {
      clearTimeout(timer);
      console.log("clear data");
    };
  });

  let assignedClasses = [];
  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.Red;
  }
  if (props.person.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.person.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button className={btnClass} onClick={props.clicked}>
        View People
      </button>
    </div>
  );
};

export default cockpit;
