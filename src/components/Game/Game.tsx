import { FC, useState } from "react";
import { calculateWinner } from "../../helpers";
import { Board } from "../Board";
import "./Game.scss";

export const Game: FC = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (i: number) => {
    const newBoard = [...board];

    if (winner || newBoard[i]) {
      return;
    }

    newBoard[i] = xIsNext ? "X" : "O";
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const startNewGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <>
      <Board squares={board} onClick={handleClick} />
      <div className="game">
        {winner ? (
          <h2 className="winner">{`Winner: ${winner}`}</h2>
        ) : (
          <h2 className="nextPlayer">
            {`Next Player: ${xIsNext ? "X" : "O"}`}
          </h2>
        )}

        <button className="button" onClick={startNewGame}>Start new game!</button>
      </div>
    </>
  );
};
