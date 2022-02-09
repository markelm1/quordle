import { Component, createMemo } from "solid-js";
import { ALLOWED_SET, ANSWERS_SET, NUM_GAMES_X } from "./constants";
import { useGamesDataContext } from "./GameDataProvider";
import { GameMode } from "./types";
import { indexOfAll } from "./utils";

type BoxState = "correct" | "diff" | "none" | "invalid";

type GameTileProps = {
  mode: GameMode;
  gameX: number;
  gameY: number;
  gameCol: number;
  gameRow: number;
};
const GameTile: Component<GameTileProps> = (props) => {
  const gameIndex = props.gameX + props.gameY * NUM_GAMES_X;

  const [gamesData] = useGamesDataContext();

  const shouldRenderLetter = createMemo(() => {
    const gameData = gamesData[props.mode];
    const current = gameData.current;
    const guesses = gameData.guesses;
    const answer = gameData.answers[gameIndex];
    const answerIndex = guesses.indexOf(answer);
    return (
      props.gameRow <= answerIndex ||
      (answerIndex === -1 && props.gameRow < guesses.length) ||
      (answerIndex === -1 &&
        props.gameRow === guesses.length &&
        props.gameCol < current.length)
    );
  });

  const letter = createMemo(() => {
    const gameData = gamesData[props.mode];
    const guesses = gameData.guesses;
    const current = gameData.current;
    let letter: string = "";
    if (!shouldRenderLetter()) {
      return letter;
    } else if (props.gameRow < guesses.length) {
      letter = guesses[props.gameRow][props.gameCol];
    } else if (props.gameRow === guesses.length) {
      letter = current[props.gameCol];
    }
    return letter.toUpperCase();
  });

  const boxState = createMemo((): BoxState => {
    const gameData = gamesData[props.mode];
    const guesses = gameData.guesses;
    const answers = gameData.answers;
    const current = gameData.current;
    if (shouldRenderLetter()) {
      if (props.gameRow < guesses.length) {
        const guess = guesses[props.gameRow];
        const guessLetter = guess[props.gameCol];
        const answer = answers[gameIndex];
        const answerLetter = answer[props.gameCol];
        if (guessLetter === answerLetter) {
          return "correct";
        } else if (answer.indexOf(guessLetter) > 0) {
          const allOtherIndicies = indexOfAll(answer, guessLetter);
          let hasLetterCorrectElsewhere = false;
          let hasLetterIncorrectElsewhere = false;
          for (const index of allOtherIndicies) {
            if (index === props.gameCol) continue;
            if (answer[index] === guess[index]) {
              hasLetterCorrectElsewhere = true;
            } else if (
              answer[index] !== guess[index] &&
              answer[index] === guessLetter
            ) {
              hasLetterIncorrectElsewhere = true;
            }
          }
          return hasLetterCorrectElsewhere && !hasLetterIncorrectElsewhere
            ? "none"
            : "diff";
        }
      } else if (
        props.gameRow === guesses.length &&
        current.length === 5 &&
        !ALLOWED_SET.has(current) &&
        !ANSWERS_SET.has(current)
      ) {
        return "invalid";
      }
    }
    return "none";
  });

  return (
    <div
      class="quordle-box w-[20%]"
      classList={{
        "border-t-[1px]": props.gameRow === 0,
        "border-l-[1px]": props.gameCol === 0,
        "text-black bg-box-correct": boxState() === "correct",
        "text-black bg-box-diff": boxState() === "diff",
        "text-red-500": boxState() === "invalid",
      }}
    >
      <div class="quordle-box-content" textContent={letter()} />
    </div>
  );
};

export default GameTile;
