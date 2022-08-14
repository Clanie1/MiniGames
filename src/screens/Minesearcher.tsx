import MinedLand from "../components/minesearcher/MinedLand";
import Timer from "../components/Timer";
import { useState } from "react";

const Minesearcher = () => {

  return (
    <div className="bg-blue-100 w-screen h-screen relative">
      <div className="w-3/4 max-w-screen-lg m-auto py-5">
      <h1 className="text-center uppercase font-helvetica mb-2 font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-blue-600 whitespace-nowrap">
          Minesweeper
        </h1>
        <Timer/>
        <MinedLand/>
      </div>
    </div>
  );
};

export default Minesearcher;
