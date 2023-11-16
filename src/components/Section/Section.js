import React from "react";
import "./Section.css";

function Section(props) {
  return (
    <div className="content">
      <div className="text-info">
        <span> {props.name}</span>
        <div className="label">{props.label}</div>
      </div>
      <img src={props.img} className="img" alt="Image quiz time" />
    </div>
  );
}
export default Section;
