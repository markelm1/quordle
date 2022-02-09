import { Component, onCleanup } from "solid-js";
import {
  BOX_SIZE,
  GAME_COLS,
  GAME_ROWS,
  NUM_GAMES_X,
  NUM_GAMES_Y,
} from "./constants";
import { useGamesDataContext } from "./GameDataProvider";
import GameSquare from "./GameTile";
import Header from "./Header";
import Keyboard from "./Keyboard";
import { GameMode } from "./types";

export const GAME_WIDTH = BOX_SIZE * GAME_COLS * NUM_GAMES_X + 4;

const NUM_GAMES_X_ARR = [...Array(NUM_GAMES_X).keys()];
const NUM_GAMES_Y_ARR = [...Array(NUM_GAMES_Y).keys()];
const GAME_ROWS_ARR = [...Array(GAME_ROWS).keys()];
const GAME_COLS_ARR = [...Array(GAME_COLS).keys()];

type GameQuadrantProps = {
  mode: GameMode;
  gameX: number;
  gameY: number;
};
const GameQuadrant: Component<GameQuadrantProps> = (props) => {
  return (
    <div
      class={`flex flex-col flex-auto ${
        props.gameX === 0 ? "mr-[4px]" : "ml-[4px]"
      } ${props.gameY === 0 ? "mb-[4px]" : "mt-[4px]"}`}
    >
      {GAME_ROWS_ARR.map((rowIndex) => (
        <div class="flex w-full">
          {GAME_COLS_ARR.map((colIndex) => (
            <GameSquare
              mode={props.mode}
              gameX={props.gameX}
              gameY={props.gameY}
              gameRow={rowIndex}
              gameCol={colIndex}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

type GameProps = {
  mode: GameMode;
};
const Game: Component<GameProps> = (props) => {
  const [gamesData, gamesDataFuncs] = useGamesDataContext();

  const keyEventListener = (e: KeyboardEvent) => {
    gamesDataFuncs.sendKey(props.mode, e);
  };
  document.addEventListener("keydown", keyEventListener);
  onCleanup(() => document.removeEventListener("keydown", keyEventListener));

  return (
    <div class="w-full h-full absolute flex flex-col">
      <Header />
      <div class="max-w-[550px] m-auto overflow-auto w-full flex-auto">
        <div class="w-full flex-col">
          {NUM_GAMES_Y_ARR.map((gameY) => (
            <div class="flex w-full">
              {NUM_GAMES_X_ARR.map((gameX) => (
                <GameQuadrant mode={props.mode} gameX={gameX} gameY={gameY} />
              ))}
            </div>
          ))}
        </div>
      </div>
      <Keyboard mode={props.mode} />
    </div>
  );
};

export default Game;
