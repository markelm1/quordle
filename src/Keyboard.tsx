import type { Component } from "solid-js";
import { KEYBOARD_KEYS } from "./constants";
import { useGamesDataContext } from "./GameDataProvider";
import { GameMode } from "./types";

const ALPHABET = "abcdefghijklmnopqrstuvwxyz";

type KeyboardProps = {
  mode: GameMode;
};
const Keyboard: Component<KeyboardProps> = (props) => {
  const [gamesData, gamesDataFuncs] = useGamesDataContext();
  return (
    <div class="max-w-[550px] m-auto w-full flex-col">
      {KEYBOARD_KEYS.map((row, y) => (
        <div class="flex w-full">
          {row.map((key, x) => (
            <div
              class="quordle-box w-[10%]"
              classList={{
                "border-l-[1px]": x === 0,
                "border-t-[1px]": y === 0,
                "border-b-transparent": key === "enter3",
                "border-r-transparent": key === "enter1",
              }}
            >
              <div
                class="quordle-box-content"
                onClick={() => {
                  gamesDataFuncs.sendKey(
                    props.mode,
                    new KeyboardEvent("keydown", {
                      keyCode: key.startsWith("enter")
                        ? 13
                        : key === "bs"
                        ? 8
                        : ALPHABET.indexOf(key.toLocaleLowerCase()) + 65,
                      key: key.startsWith("enter")
                        ? "Enter"
                        : key === "bs"
                        ? "Backspace"
                        : key.toLocaleLowerCase(),
                    })
                  );
                }}
                textContent={
                  key === "enter2"
                    ? "\u23CE"
                    : key === "bs"
                    ? "\u232B"
                    : key.startsWith("enter")
                    ? ""
                    : key
                }
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
