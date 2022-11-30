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

  const checkForColumnOfFour = () => {
    for (let i = 0; i < 39; i++) {
      const columnOfFour = [i, i + 8, i + 16, i + 24]
      const decidedColor = currColor[i]

      if (columnOfFour.every(ind => currColor[ind] === decidedColor)) {
        columnOfFour.forEach(ind => currColor[ind] = ' ');
      }
    }
  }

  const checkForRowOfFour = () => {
    for (let i = 0; i < 64; i++) {

      if (i % 8 != 5 || i % 8 != 6 || i % 8 != 7) {
        const RowOfFour = [i, i + 1, i + 2, i + 3]
        const decidedColor = currColor[i]

        if (RowOfFour.every(ind => currColor[ind] === decidedColor)) {
          RowOfFour.forEach(ind => currColor[ind] = ' ');
        }
      }
    }
  }

  const checkForColumnOfThree = () => {
    for (let i = 0; i < 47; i++) {
      const columnOfThree = [i, i + 8, i + 16]
      const decidedColor = currColor[i]

      if (columnOfThree.every(ind => currColor[ind] === decidedColor)) {
        columnOfThree.forEach(ind => currColor[ind] = ' ');
      }
    }
  }

  const checkForRowOfThree = () => {
    for (let i = 0; i < 64; i++) {

      if (i % 8 != 6 || i % 8 != 7) {
        const RowOfThree = [i, i + 1, i + 2]
        const decidedColor = currColor[i]

        if (RowOfThree.every(ind => currColor[ind] === decidedColor)) {
          RowOfThree.forEach(ind => currColor[ind] = ' ');
        }
      }
    }
  }

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


  useEffect(() => {
    const timer = setInterval(() => {
      checkForColumnOfFour();
      checkForRowOfFour();
      checkForColumnOfThree();
      checkForRowOfThree();
      setCurrColor([...currColor])
    }, 100)
    return () => clearInterval(timer)
  }, [checkForColumnOfFour, checkForRowOfFour, checkForColumnOfThree, checkForRowOfThree, currColor]);

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