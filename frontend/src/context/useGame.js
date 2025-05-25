import { useContext } from "react";
import GameContext from "./GameContextObject";

const useGame = () => useContext(GameContext);

export default useGame;
