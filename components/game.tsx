"use client";

import { useState } from "react";

import Board from "./board";

const Game = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares: string[]) {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }

  return (
    <>
      <main className="flex items-center justify-center">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </main>
    </>
  );
};

export default Game;
