import { Link } from "react-router-dom";

const Navigation = () => {
  return (
  <div className="w-full bg-black text-white">
      <div className="w-3/4 m-auto py-3 flex justify-between items-center font-helvetica">
        <div className="text-xl whitespace-nowrap">
          <h1 className="uppercase">MiniGame web</h1>
        </div>
        <div>
          <ul className="flex space-x-5">
            <Link
              to="/"
              className="rounded-lg text-white hover:bg-white hover:text-black px-2 py-1 duration-100 font-bold"
            >
              Home
            </Link>
            <Link
              to="/wordle"
              className="rounded-lg text-white hover:bg-white hover:text-red-500 px-2 py-1 duration-100 font-bold"
            >
              Wordle
            </Link>
            <Link
              to="/Mines"
              className="rounded-lg text-white hover:bg-white hover:text-blue-500 px-2 py-1 duration-100 font-bold"
            >
              Minesweeper
            </Link>
            <Link
              to="/Sudoku"
              className=" rounded-lg text-white hover:bg-white hover:text-yellow-500 px-2 py-1 duration-100 font-bold"
            >
              Sudoku
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
