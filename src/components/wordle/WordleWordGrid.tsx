import LetterBox from "./LetterBox";
import { useState, useEffect } from "react";
import Row from "./Row";
import { write } from "fs";

const WordleWordGrid = () => {
  const WORDSTR = "MORIR";
  const [guested, setGuested] = useState<any>([]);
  const [words, setWords] = useState(["", "", "", "", ""]);
  const [word, setWord] = useState(WORDSTR);
  const [win, setWin] = useState("playing");

  const handdler = (e: any) => {
    if (win == "win") {
      return;
    }
    let index = -1;
    let last = 0;
    for (let i = 0; i < words.length; i++) {
      if (words[i] === "") {
        index = i;
        break;
      } else {
        last = i;
      }
    }
    let array = [...words];
    if (e.key === "Enter" && index === -1) {
      let word = words.join("");
      const dicc = wordGrade(word);
      setWords(["", "", "", "", ""]);
      setGuested([...guested, dicc]);
    } else if (e.key === "Backspace" && index !== 0) {
      array[last] = "";
      setWords([...array]);
    } else if (e.key !== "Backspace" && e.key !== "Enter" && e.key.length < 2) {
      const letter = e.key.toUpperCase()
      const aschii = letter.charCodeAt(0)
      console.log(aschii)
      array[index] = letter;
      setWords([...array]);
    }
  };

  const wordGrade = (str: string) => {
    let dicc: any = {};
    for (let i = 0; i < word.length; i++) {
      let letter = word.charAt(i);
      if (letter in dicc) {
        dicc[letter]++;
      } else {
        dicc[letter] = 1;
      }
    }
    let ans: any = [];
    for (let i = 0; i < str.length; i++) {
      ans.push({ letter: str.charAt(i) });
    }
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (word.charAt(i) === str.charAt(i)) {
        count++;
        ans[i]["value"] = "correct";
        dicc[word.charAt(i)]--;
      }
    }
    if (count == word.length) {
      setWin("win");
    }
    for (let i = 0; i < str.length; i++) {
      if ("value" in ans[i]) {
        continue;
      }
      if (str.charAt(i) in dicc && dicc[str.charAt(i)] > 0) {
        ans[i]["value"] = "isIn";
        dicc[str.charAt(i)]--;
      } else {
        ans[i]["value"] = "incorrect";
      }
    }
    return ans;
  };

  const reset = () => {
    setGuested([]);
    setWords(["", "", "", "", ""]);
    setWin("playing");
  };

  useEffect(() => {
    window.addEventListener("keydown", handdler);
    return () => {
      window.removeEventListener("keydown", handdler);
    };
  }, [words]);

  return (
    <div className="m-auto flex flex-col items-center justify-center gap-2">
      {guested.map((obj: any, index: any) => {
        return (
          <div>
            <Row info={obj} key={index} />
          </div>
        );
      })}
      <div className="flex gap-2">
        {win != "playing"
          ? ""
          : words.map((obj, index) => {
              return <LetterBox letter={obj} type="normal" key={index} />;
            })}
      </div>
      {win != "playing"? (
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="font-bold text-red-500 text-3xl">YOU WIN</h1>
          <div className="">
            <div
              className="w-fit border-2 border-red-500 bg-red-400 text-white font-bold rounded-xl px-3 py-1 cursor-pointer hover:text-red-500 hover:bg-white duration-100"
              onClick={reset}
            >
              RESET
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default WordleWordGrid;
