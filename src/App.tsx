import { FC } from "react";
import { Game } from "./components/Game";
import "./index.scss";

export const App: FC = () => {
  return (
    <section className="base">
      <h1>Tic-Tac-Toe</h1>
      <Game />
    </section>
  )
}
