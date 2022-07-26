import { useEffect } from "react";

interface content {
  letter: string;
  type: "normal" | "isIn" | "correct" | "incorrect";
}
const LetterBox = ({ letter, type }: content) => {
  useEffect(() => {}, []);

  const getColor = () => {
    switch (type) {
      case "normal":
        return "border-red-500 bg-red-200";
      case "isIn":
        return "border-yellow-500 bg-yellow-200";
      case "correct":
        return "border-green-500 bg-green-200";
      case "incorrect":
        return "border-black bg-gray-500";
    }
  };

  let color = getColor();

  return (
    <div
      className={"flex items-center justify-center border-2 w-10 h-10 " + color}
    >
      <h1 className="font-bold text-3xl text-white">{letter}</h1>
    </div>
  );
};

export default LetterBox;
