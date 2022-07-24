import LetterBox from "./LetterBox";
import { useState, useEffect } from "react";

const WordleWordGrid = () => {
  const [guested, setGuested] = useState<String[]>([]);
  const [words, setWords] = useState(["", "", "", "", ""]);

  const handdler = (e: any) => {
    console.log(e.key);
    let index = -1;
    let last = 0;
    for (let i = 0; i < words.length; i++) {
      if (words[i] == "") {
        index = i;
        break;
      } else {
        last = i;
      }
    }
    console.log(index);
    let array = [...words];
    if (e.key == "Enter" && index == -1) {
      let word = words.join("");
      setWords(["", "", "", "", ""]);
      setGuested([...guested, word]);
    } else if (e.key == "Backspace" && index != 0) {
      array[last] = "";
      setWords([...array]);
    } else if (e.key != "Backspace" && e.key != "Enter") {
      array[index] = e.key.toUpperCase();
      setWords([...array]);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handdler);
    return () => {
      window.removeEventListener("keydown", handdler);
    };
  }, [words]);

  return (
    <div className="m-auto flex flex-col items-center justify-center gap-2">
      {guested.map((obj, index) => {
        return (
          <div>
            <h1>{obj}</h1>
          </div>
        );
      })}
      <div className="flex gap-2">
        {words.map((obj, index) => {
          return <LetterBox letter={obj} key={index} />;
        })}
      </div>
    </div>
  );
};
export default WordleWordGrid;
