type SquareProps = {
  value: string;
  onSquareClick: () => void;
};

const Square = ({ value, onSquareClick }: SquareProps) => {
  return (
    <button
      className="h-20 w-20 border border-white border-solid items-center justify-center text-2xl font-semibold"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
};

export default Square;
