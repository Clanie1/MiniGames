import { useEffect, useState } from "react";
import Land from "./Land";

interface rules {
  setWin: Function;
}
const MinedLand = ({ setWin }: rules) => {
  const numberOfMines = 10;
  const rows = 10;
  const columns = 10;

  interface box {
    val: number;
    state: boolean;
  }

  const [land, setLand] = useState<box[][]>([]);

  const [squares, setSquares] = useState<number>(
    rows * columns - numberOfMines
  );

  const [gameState, setGameState] = useState<boolean>(false);

  const generate = () => {
    let arr: box[][] = [];
    for (let i = 0; i < rows; i++) {
      let temp: box[] = [];
      for (let j = 0; j < columns; j++) {
        temp.push({ val: 0, state: false });
      }
      arr.push(temp);
    }
    let count = numberOfMines;
    while (count > 0) {
      let row = Math.floor(Math.random() * rows);
      let colum = Math.floor(Math.random() * columns);
      if (arr[row][colum].val === 0) {
        arr[row][colum].val = 9;
        count--;
      }
    }
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j].val === 9) {
          for (let h = -1; h < 2; h++) {
            for (let k = -1; k < 2; k++) {
              if (i + h >= 0 && i + h < rows && j + k >= 0 && j + k < columns) {
                //antes habia(i === 0 && j === 0)
                if (arr[i + h][j + k].val === 9) {
                  continue;
                }
                arr[i + h][j + k].val += 1;
              }
            }
          }
        }
      }
    }
    return arr;
  };

  useEffect(() => {
    reset();
  }, []);

  const reset = () => {
    let arr = generate();
    setLand(arr);
    setGameState(false);
    setSquares(rows * columns - numberOfMines);
  };

  useEffect(() => {
    if (squares === 0) {
      setWin();
      setGameState(true);
    }
  }, [squares]);

  const handleClick = (row: number, colum: number) => {
    let arr: box[][] = [...land];
    let counter = 0;
    if (arr[row][colum].val === 9) {
      reset();
      alert("Game Over");
      return;
    }

    if (arr[row][colum].val !== 9 && arr[row][colum].state === false) {
      const spreed = (row: number, colum: number) => {
        counter++;
        arr[row][colum].state = true;
        if (arr[row][colum].val !== 0) {
          return;
        }
        for (let i = -1; i < 2; i++) {
          for (let j = -1; j < 2; j++) {
            let newRow: number = row + i;
            let newColum: number = colum + j;
            if (i === 0 && j === 0) {
              continue;
            }
            if (
              newRow < rows &&
              newRow >= 0 &&
              newColum < columns &&
              newColum >= 0
            ) {
              if (
                arr[newRow][newColum].val !== 9 &&
                arr[newRow][newColum].state === false
              ) {
                // counter++;
                spreed(newRow, newColum);
              }
            }
          }
        }
      };
      spreed(row, colum);
    }
    arr[row][colum].state = true;
    setSquares(squares - counter);
    setLand(arr);
  };

  return (
    <div className="flex flex-col mt-10 items-center gap-4">
      <div className="m-auto">
        {land.map((row, i) => {
          return (
            <div className="flex">
              {row.map((element, j) => {
                return (
                  <Land
                    row={i}
                    colum={j}
                    element={element}
                    handdler={handleClick}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
      {gameState ? (
        <div className="flex gap-3 flex-col items-center">
          <h1 className="text-3xl text-blue-500 font-bold underline text-center">
            Ganaste
          </h1>
          <button
            className="font-bold text-mb text-white rounded-2xl bg-blue-500 w-fit py-3 px-10 hover:bg-white hover:border-2 hover:border-blue-500 hover:text-blue-500 duration-100"
            onClick={reset}
          >
            Reset
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default MinedLand;
