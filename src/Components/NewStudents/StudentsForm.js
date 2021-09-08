import React, { useState } from "react";
import "./StudentsForm.css";

const StudentsForm = (props) => {
  const [enterName, setenterName] = useState();
  const [enterPhysics, setenterPhysics] = useState();
  const [enterChemistry, setEnterChemistry] = useState();
  const [enterMathematics, setEnterMathematics] = useState();
  const [enterTotal, setenterTotal] = useState();
  const nameHandler = (event) => {
    setenterName(event.target.value);
  };
  const physicsHandler = (event) => {
    setenterPhysics(event.target.value);
  };
  const chemistryHandler = (event) => {
    setEnterChemistry(event.target.value);
  };
  const mathematicsHandler = (event) => {
    setEnterMathematics(event.target.value);
  };
  const changeHandler = (event) => {
    event.preventDefault();
    const stddata = {
      name: enterName,
      physics: enterPhysics,
      chemistry: enterChemistry,
      mathematics: enterMathematics,
    };
    props.onChangeData(stddata);
    setenterName("");
    setenterPhysics("");
    setEnterMathematics("");
    setEnterChemistry("");
    setenterTotal("");
  };

  const changeEnterTotal = () => {
    const sum =
      Number(enterPhysics) + Number(enterChemistry) + Number(enterMathematics);
    setenterTotal(sum);
  };

  return (
    <form onSubmit={changeHandler} className="new-expense__controls">
      <div className="new-expense__control">
        <label>Name</label>
        <input type="text" onChange={nameHandler} value={enterName} />
      </div>
      <div className="new-expense__control">
        <label>Physics</label>
        <input type="number" onChange={physicsHandler} value={enterPhysics} />
      </div>
      <div className="new-expense__control">
        <label>Chemistry</label>
        <input
          type="number"
          onChange={chemistryHandler}
          value={enterChemistry}
        />
      </div>
      <div className="new-expense__control">
        <label>Mathematics</label>
        <input
          type="number"
          onChange={mathematicsHandler}
          value={enterMathematics}
        />
      </div>
      <div className="new-expense__control">
        <label>Total</label>
        <input type="number" onFocus={changeEnterTotal} value={enterTotal} />
      </div>
      <button className="new-expense__actions">SUBMIT</button>
    </form>
  );
};

export default StudentsForm;
