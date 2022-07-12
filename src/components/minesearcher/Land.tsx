import { useState } from "react";

interface index {
  row: number;
  colum: number;
  element: any;
  handdler: Function;
}

const Land = ({ row, colum, element, handdler }: index) => {
  let colorHover: string;
  if (!element.state) {
    colorHover = " bg-white hover:bg-gray-500 duration-100";
  } else {
    colorHover = "";
  }
  const [flag, setFlag] = useState(false);

  window.addEventListener("contextmenu", (event) => event.preventDefault());
  return (
    <div
      className={"w-10 h-10 border-2 text-mb " + colorHover}
      onClick={() => handdler(row, colum)}
      onContextMenu={() => {
        setFlag(!flag);
      }}
      id="cuadro"
    >
      {!element.state ? (
        flag ? (
          <div className="w-full h-full flex justify-center items-center">
            🚩
          </div>
        ) : (
          ""
        )
      ) : element.val == 0 ? (
        <div className="w-full h-full bg-blue-300"></div>
      ) : element.val == 9 ? (
        <div className="w-full h-full bg-red-300 flex items-center justify-center font-bold text-white">
          💣
        </div>
      ) : (
        <div className="w-full h-full bg-blue-400 flex items-center justify-center font-bold text-white">
          {element.val}
        </div>
      )}
    </div>
  );
};

export default Land;
