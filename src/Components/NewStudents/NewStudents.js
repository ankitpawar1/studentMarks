import React from "react";
import StudentsForm from "./StudentsForm";
import "./NewStudents.css";

const NewStudents = (props) => {
  const storedataHandler = (str) => {
    const data = { ...str };
    props.onHandler(data);
  };

  return (
    <div className="new-expense">
      <StudentsForm onChangeData={storedataHandler} sumform={props.sum} />
    </div>
  );
};

export default NewStudents;
