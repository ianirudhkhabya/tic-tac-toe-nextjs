import Square from "./square";

const Board = () => {
  return (
    <>
      <div className="flex flex-col">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="flex flex-col">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="flex flex-col">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
};

export default Board;
