import React from 'react'
import { useEffect, useState } from 'react'


const color = [
  'blue',
  'red',
  'green',
  'orange',
  'black'
]

const App = () => {
  const [currColor, setCurrColor] = useState([]);

  const createBoard = () => {
    const colorArray = [];
    for (let i = 0; i < 64; i++) {
      const random = Math.floor(Math.random() * color.length);
      const cell = color[random];
      colorArray.push(cell);
    }
    setCurrColor(colorArray);

  }

  useEffect(() => {
    createBoard();
  }, []);
  console.log(currColor);

  return (
    <div className="app">
      <div className="game">
        {currColor.map((color, index) => (
          <img
            key={index}
            style={{ backgroundColor: color }}
          // alt={color}
          />
        ))}
      </div>
    </div>
  )
}

export default App