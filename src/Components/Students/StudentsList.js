import React from "react";
import "./StudentsList.css";

const StudentsList = (props) => {
  const sum =
    Number(props.physics) + Number(props.chemistry) + Number(props.mathematics);
  return (
    <div>
      <div className="students-list">
        <div className="name">{props.name}</div>
        <div className="seep">{props.physics}</div>
        <div className="seep">{props.chemistry}</div>
        <div className="seep">{props.mathematics}</div>
        <div className="seep">{sum}</div>
      </div>
    </div>
  );
};

export default StudentsList;
