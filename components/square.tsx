"use client";

import { useState } from "react";

const Square = () => {
  const [value, setValue] = useState<string | null>(null);

  const handleClick = () => {
    setValue("X");
  };

  return (
    <button
      className="h-20 w-20 border border-white border-solid items-center justify-center text-2xl font-semibold"
      onClick={handleClick}
    >
      {value}
    </button>
  );
};

export default Square;
