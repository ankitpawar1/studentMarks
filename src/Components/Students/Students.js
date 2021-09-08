import React from "react";
import StudentsList from "./StudentsList";
import "./Students.css";
import SubjectLabel from "./SubjectLabel";

const Students = (props) => {
  return (
    <div className="students">
      <SubjectLabel />
      {props.data.map((str) => (
        <StudentsList
          name={str.name}
          physics={str.physics}
          chemistry={str.chemistry}
          mathematics={str.mathematics}
        />
      ))}
    </div>
  );
};

export default Students;
