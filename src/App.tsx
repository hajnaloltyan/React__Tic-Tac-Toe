import { FC } from "react";
import { Game } from "./components/Game";
import "./index.scss";

export const App: FC = () => {
  return (
    <section className="base">
      <Game />
    </section>
  )
}
