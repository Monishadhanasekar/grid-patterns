import { useState } from "react";
import "./App.css";

const Grid = () => {
  const [activeBoxes, setActiveBoxes] = useState([]);

  const handleClick = (id) => {
    if (activeBoxes.includes(id)) return;

    setActiveBoxes(prev => [...prev, id]);

    setTimeout(() => {
      setActiveBoxes(prev => prev.filter(item => item !== id));
    }, 3000);
  };

  let id = 1;
  const cells = [];

  for (let row = 1; row <= 3; row++) {
    for (let col = 1; col <= 3; col++) {
      if (row === 2 && col === 2) continue; // skip center

      cells.push(
        <div
          key={id}
          className={`box ${activeBoxes.includes(id) ? "active" : ""}`}
          style={{ gridRow: row, gridColumn: col }}
          onClick={() => handleClick(id)}
        >
          {id++}
        </div>
      );
    }
  }

  return <div className="container">{cells}</div>;
};

export default Grid;
