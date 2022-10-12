import React from "react";
import "./Button.css"

export default function (props) {
  const {label, styleClass, onClick, disabled} = props;
  return (
    <button className={styleClass} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
}