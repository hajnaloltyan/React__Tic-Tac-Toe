import { FC } from "react";
import "./Square.scss";

interface SquareProps {
  value: string;
  onClick: () => void;
}

export const Square: FC<SquareProps> = ({ value, onClick }) => (
  <button className="square" onClick={onClick}>
    {value}
  </button>
);
