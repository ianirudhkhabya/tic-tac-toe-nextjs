"use client";

import { useState } from "react";

import Board from "./board";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: string[]) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares: string[], move) => {
    let description;
    if (move) {
      description = `Go to move #${move}`;
    } else {
      description = "Go to game start";
    }

    return (
      <li key={move}>
        <button
          className="mt-2 border border-gray-800 dark:border-gray-200 rounded px-2 py-1"
          onClick={() => jumpTo(move)}
        >
          {description}
        </button>
      </li>
    );
  });

  return (
    <>
      <main className="flex items-center justify-center">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </main>
      <aside className="m-4">
        <ol className="text-center">{moves}</ol>
      </aside>
    </>
  );
};

export default Game;
