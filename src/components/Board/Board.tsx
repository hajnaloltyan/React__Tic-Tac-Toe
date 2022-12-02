import { FC } from "react";
import { Square } from "../Square";
import "./Board.scss";

interface BoardProps {
  squares: string[];
  onClick: (i: number) => void;
}

export const Board: FC<BoardProps> = ({ squares, onClick }) => (
  <div className="board">
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </div>
);
