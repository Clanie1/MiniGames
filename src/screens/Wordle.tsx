import WordleWordGrid from "../components/wordle/WordleWordGrid";
import Timer from "../components/Timer"
import { useEffect } from "react";
const Wordle = () => {
  return (
    <div className="bg-red-50 w-full min-h-screen">
      <div className="w-3/4 max-w-screen-lg m-auto pt-5 mb-2">
        <h1 className="text-center uppercase font-helvetica font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-red-700 via-red-500 to-red-600 whitespace-nowrap">
          Wordle
        </h1>
      </div>
      <div className="mb-2">
      <Timer/>
      </div>
      <WordleWordGrid />
    </div>
  );
};

export default Wordle;
