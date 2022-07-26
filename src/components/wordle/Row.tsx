import { InferencePriority } from "typescript";
import LetterBox from "./LetterBox";

interface box {
  info: any;
}

const Row = ({ info }: box) => {
  return (
    <div className="flex gap-2">
      {info.map((obj: any) => {
        return (
          <div className="h-10 w-10 border-5">
            <LetterBox letter={obj["letter"]} type={obj["value"]} />
          </div>
        );
      })}
      {/* {array.map((obj, index) => {
        return <LetterBox letter={obj} type="normal" key={index} />;
      })} */}
    </div>
  );
};

export default Row;
