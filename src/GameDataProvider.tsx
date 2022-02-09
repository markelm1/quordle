import MersenneTwister from "mersenne-twister";
import { Component, createContext, createEffect, useContext } from "solid-js";
import {
  createStore,
  DeepReadonly,
  produce,
  SetStoreFunction,
  Store,
} from "solid-js/store";
import {
  ALLOWED_SET,
  ALPHABET,
  ANSWERS,
  ANSWERS_SET,
  GAME_COLS,
  GAME_ROWS,
  NUM_GAMES,
  START_DATE,
} from "./constants";
import {
  BoxState,
  GameData,
  GameMode,
  GamesData,
  GamesDataProviderFuncs,
} from "./types";
import { indexOfAll } from "./utils";

export const generateBoxStatesFromGuess = (
  guess: string,
  answer: string
): BoxState[] => {
  const states: BoxState[] = [];
  for (let i = 0; i < GAME_COLS; i++) {
    const guessLetter = guess[i];
    const answerLetter = answer[i];
    if (guessLetter === answerLetter) {
      states.push("correct");
    } else if (answer.indexOf(guessLetter) > 0) {
      const allOtherIndicies = indexOfAll(answer, guessLetter);
      let hasLetterCorrectElsewhere = false;
      let hasLetterIncorrectElsewhere = false;
      for (const index of allOtherIndicies) {
        if (index === i) continue;
        if (answer[index] === guess[index]) {
          hasLetterCorrectElsewhere = true;
        } else if (
          answer[index] !== guess[index] &&
          answer[index] === guessLetter
        ) {
          hasLetterIncorrectElsewhere = true;
        }
      }
      states.push(
        hasLetterCorrectElsewhere && !hasLetterIncorrectElsewhere
          ? "none"
          : "diff"
      );
    } else {
      states.push("none");
    }
  }
  return states;
};

export const generateAllGamesBoxStates = (
  guesses: string[],
  answers: string[]
): BoxState[][][] => {
  const states: BoxState[][][] = [[], [], [], []];
  for (let i = 0; i < answers.length; i++) {
    const guessIndex = guesses.indexOf(answers[i]);
    for (let g = 0; g < guesses.length; g++) {
      if (g <= guessIndex || guessIndex === -1) {
        states[i].push(generateBoxStatesFromGuess(guesses[g], answers[i]));
      }
    }
  }
  return states;
};

export const generateWordsFromSeed = (seed: number): string[] => {
  let answers: string[] | undefined;
  const rnd = new MersenneTwister(seed);
  rnd.random_int31();
  rnd.random_int31();
  rnd.random_int31();
  rnd.random_int31();
  do {
    answers = [
      ANSWERS[rnd.random_int31() % ANSWERS.length],
      ANSWERS[rnd.random_int31() % ANSWERS.length],
      ANSWERS[rnd.random_int31() % ANSWERS.length],
      ANSWERS[rnd.random_int31() % ANSWERS.length],
    ];
  } while (
    answers[0] == answers[1] ||
    answers[0] == answers[2] ||
    answers[0] == answers[3] ||
    answers[1] == answers[2] ||
    answers[1] == answers[3] ||
    answers[2] == answers[3]
  );
  return answers;
};

function createLocalStore(): [Store<GamesData>, SetStoreFunction<GamesData>] {
  const date = new Date();
  const currentDailySeed =
    ((date.getTime() - START_DATE.getTime()) / (1000 * 3600 * 24)) >> 0;
  const gamesData: GamesData = {
    daily: {
      seed: 0,
      guesses: [],
      answers: [],
      current: "",
      states: [[], [], [], []],
      answersCorrect: [-1, -1, -1, -1],
    },
    free: {
      seed: 0,
      guesses: [],
      answers: [],
      current: "",
      states: [[], [], [], []],
      answersCorrect: [-1, -1, -1, -1],
    },
  };
  (["daily", "free"] as GameMode[]).forEach((mode) => {
    let gameData: GameData;
    try {
      const lastSeed = Number(window.localStorage.getItem("last_" + mode));
      const guesses = window.localStorage.getItem(mode + "_guesses") || "";
      if (lastSeed && (mode === "free" || lastSeed === currentDailySeed)) {
        const guessesArr = guesses ? guesses.split(",") : [];
        const answers = generateWordsFromSeed(lastSeed);
        gameData = {
          seed: lastSeed,
          guesses: guessesArr,
          answers,
          current: "",
          states: generateAllGamesBoxStates(guessesArr, answers),
          answersCorrect: [0, 1, 2, 3].map((i) =>
            guessesArr.indexOf(answers[i])
          ),
        };
      } else {
        const seed = mode === "daily" ? currentDailySeed : date.getTime();
        const answers = generateWordsFromSeed(seed);
        gameData = {
          seed: seed,
          guesses: [],
          answers,
          current: "",
          states: generateAllGamesBoxStates([], answers),
          answersCorrect: [-1, -1, -1, -1],
        };
      }
    } catch (e) {
      const seed = mode === "daily" ? currentDailySeed : date.getTime();
      const answers = generateWordsFromSeed(seed);
      gameData = {
        seed: seed,
        guesses: [],
        answers,
        current: "",
        states: generateAllGamesBoxStates([], answers),
        answersCorrect: [-1, -1, -1, -1],
      };
    }
    gamesData[mode] = gameData;
  });

  const [state, setState] = createStore<GamesData>(gamesData);

  createEffect(() => {
    try {
      (["daily", "free"] as GameMode[]).forEach((mode) => {
        window.localStorage.setItem("last_" + mode, String(state[mode].seed));
        window.localStorage.setItem(
          mode + "_guesses",
          state[mode].guesses.join(",")
        );
      });
    } catch (e) {
      // Do nothing if there is no local storage
    }
  });
  return [state, setState];
}

export const GamesDataContext =
  createContext<[DeepReadonly<GamesData>, GamesDataProviderFuncs]>();

type GamesDataProviderProps = {};
const GamesDataProvider: Component<GamesDataProviderProps> = (props) => {
  const [state, setState] = createLocalStore();
  const isGameComplete = (mode: GameMode) => {
    return (
      state[mode].guesses.length === GAME_ROWS ||
      state[mode].answers.filter(
        (answer) => state[mode].guesses.indexOf(answer) >= 0
      ).length === 4
    );
  };
  const addLetter = (mode: GameMode, letter: string) => {
    setState(
      produce((s) => {
        if (s[mode].current.length < 5 && !isGameComplete(mode)) {
          s[mode].current += letter;
        }
      })
    );
  };
  const deleteLetter = (mode: GameMode) => {
    setState(
      produce((s) => {
        if (s[mode].current.length > 0 && !isGameComplete(mode)) {
          s[mode].current = s[mode].current.slice(0, -1);
        }
      })
    );
  };
  const submitCurrent = (mode: GameMode) => {
    setState(
      produce((s) => {
        if (
          s[mode].current.length === 5 &&
          (ANSWERS_SET.has(s[mode].current) ||
            ALLOWED_SET.has(s[mode].current)) &&
          !isGameComplete(mode)
        ) {
          const guess = s[mode].current;
          s[mode].guesses.push(guess);
          s[mode].current = "";
          for (let i = 0; i < NUM_GAMES; i++) {
            if (s[mode].guesses.indexOf(s[mode].answers[i]) === -1) {
              s[mode].states[i].push(
                generateBoxStatesFromGuess(guess, s[mode].answers[i])
              );
            }
            s[mode].answersCorrect[i] = s[mode].guesses.indexOf(
              s[mode].answers[i]
            );
          }
        }
      })
    );
  };
  const store: [DeepReadonly<GamesData>, GamesDataProviderFuncs] = [
    state,
    {
      sendKey(mode: GameMode, e: KeyboardEvent) {
        if (e.ctrlKey) return;
        if (e.key === "Backspace") {
          deleteLetter(mode);
        } else if (e.key === "Enter") {
          submitCurrent(mode);
        } else {
          const key = e.key.toLowerCase();
          if (ALPHABET.indexOf(key) == -1) return;
          addLetter(mode, key);
        }
      },
      isGameComplete,
      addLetter,
      deleteLetter,
      submitCurrent,
      resetDailyIfOld() {
        const date = new Date();
        const currentDailySeed =
          ((date.getTime() - START_DATE.getTime()) / (1000 * 3600 * 24)) >> 0;
        if (currentDailySeed !== state.daily.seed) {
          setState(
            produce((s) => {
              s.daily.seed = currentDailySeed;
              s.daily.guesses = [];
              s.daily.answers = generateWordsFromSeed(currentDailySeed);
              s.daily.current = "";
            })
          );
        }
      },
    },
  ];

  setInterval(() => {
    store[1].resetDailyIfOld();
  }, 5000);

  return (
    <GamesDataContext.Provider value={store}>
      {props.children}
    </GamesDataContext.Provider>
  );
};

export const useGamesDataContext = () => {
  const context = useContext(GamesDataContext);
  if (!context || !context.length)
    throw new Error("GamesDataContext has been used outside provider");
  return context;
};

export default GamesDataProvider;
