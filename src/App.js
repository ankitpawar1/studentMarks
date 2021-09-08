import "./App.css";
import NewStudents from "./Components/NewStudents/NewStudents";
import Students from "./Components/Students/Students";
import React, { useState } from "react";

const data = [
  {
    id: 1,
    name: "Jagdish Ramchandra Dusane",
    physics: 100,
    chemistry: 100,
    mathematics: 100,
  },
  {
    id: 2,
    name: "Ankit Pawar",
    physics: 66,
    chemistry: 60,
    mathematics: 45,
  },
  {
    id: 3,
    name: "Jagdish Ramchandra Dusane",
    physics: 99,
    chemistry: 100,
    mathematics: 100,
  },
  {
    id: 4,
    name: "Jagdish Ramchandra Dusane",
    physics: 100,
    chemistry: 100,
    mathematics: 100,
  },
];
function App() {
  const [prevData, setprevData] = useState(data);
  const storingData = (para) => {
    setprevData((prevData) => {
      return [...prevData, para];
    });
  };
  return (
    <div>
      <NewStudents
        onHandler={storingData}
        sum={data.physics + data.chemistry + data.mathematics}
      />
      <Students data={prevData} />
    </div>
  );
}

export default App;
