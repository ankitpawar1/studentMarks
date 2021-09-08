import React from "react";
import "./StudentsList.css";

const StudentsList = (props) => {
  const sum =
    Number(props.physics) + Number(props.chemistry) + Number(props.mathematics);
  return (
    <div>
      <div className="students-list">
        <div className="name">{props.name}</div>
        <div>{props.physics}</div>
        <div>{props.chemistry}</div>
        <div>{props.mathematics}</div>
        <div>{sum}</div>
      </div>
    </div>
  );
};

export default StudentsList;
