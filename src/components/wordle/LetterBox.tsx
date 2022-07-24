interface content {
  letter: string;
}
const LetterBox = ({ letter }: content) => {
  return (
    <div className="flex items-center justify-center border-2 border-red-500 bg-red-200 w-10 h-10 ">
      <h1 className="font-bold text-3xl text-white">{letter}</h1>
    </div>
  );
};

export default LetterBox;
