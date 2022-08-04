import MinedLand from "../components/minesearcher/MinedLand";
import Result from "../components/minesearcher/Result";
import { useState } from "react";

const Minesearcher = () => {
  const [win, setWin] = useState(false);

  return (
    <div className="bg-blue-100 w-screen h-screen relative">
      <div className="w-3/4 max-w-screen-lg m-auto py-5">
        {win ? <Result /> : ""}
        <h1 className="text-center uppercase font-helvetica font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-blue-600 whitespace-nowrap">
          Minesweeper
        </h1>
        <MinedLand setWin={setWin} />
      </div>
    </div>
  );
};

export default Minesearcher;
