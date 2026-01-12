import { useState, useEffect } from "react";
import "./App.css";

const Grid = () => {
  const [activeBoxes, setActiveBoxes] = useState([]);

  const handleClick = (id) => {

    setActiveBoxes((prev) => [...prev, id]);

    setTimeout(() => {
        setActiveBoxes((prev) => prev.filter((item) => item !==id))
    }, 10000);
  }

  const boxes = [
    { id: 1, area: "a" },
    { id: 2, area: "b" },
    { id: 3, area: "c" },
    { id: 4, area: "d" },
    { id: 5, area: "e" },
    { id: 6, area: "f" },
    { id: 7, area: "g" },
    { id: 8, area: "h" },
  ];

  return (
    <div className="container">
      {boxes.map(({ id, area }) => (
        <div
          key={id}
          className={`box ${area} ${activeBoxes.includes(id) ? "active" : ""}`}
          onClick={() => handleClick(id)}
        >        
        </div>
      ))}
    </div>
  );
};

export default Grid;
