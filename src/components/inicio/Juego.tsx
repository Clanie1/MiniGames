import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";

interface juego {
  title: string;
  image: string;
  link:string,
  children:any
}

const Juego = ({ title, image, link, children }: juego) => {
  const [description, setDescription] = useState(false);

  return (
    <div
      className="flex flex-col bg-white shadow rounded items-center py-2 hover:bg-blue-100 duration-100 justify-between cursor-pointer space-y-2 max-w-sm"
      onClick={() => {
        setDescription(!description);
      }}
    >
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center space-x-2 px-2">
          <img src={image} alt="" className="w-10" />
          <h1 className="font-bold">{title}</h1>
        </div>
        <div className="pr-10">
          {description ? <AiFillCaretUp /> : <AiFillCaretDown />}
        </div>
      </div>

      {description ? (
        <div className="flex flex-col space-y-2 px-1">
          <div className="text-[12px] px-3">
            {children}
          </div>
          <Link
            to={"/" + link}
            className="rounded px-3 py-1 bg-blue-400 text-white uppercase font-bold hover:bg-blue-500"
          >
            Play
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Juego;
