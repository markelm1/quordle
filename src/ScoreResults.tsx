import { Component } from "solid-js";
import { useGamesDataContext } from "./GameDataProvider";
import { do_share } from "./share";
import { GameMode } from "./types";

type ScoreResultsProps = {
  mode: GameMode;
};
const ScoreResults: Component<ScoreResultsProps> = (props) => {
  const [gamesData, gamesDataFuncs] = useGamesDataContext();

  return (
    <div
      class="p-2 rounded-t-lg text-center"
      classList={{
        "bg-green-800": gamesDataFuncs.isGameComplete(props.mode),
        "bg-red-800": !gamesDataFuncs.isGameComplete(props.mode),
      }}
    >
      <div class="text-2xl">
        {(
          gamesData[props.mode].answers[0] +
          " - " +
          gamesData[props.mode].answers[1]
        ).toLocaleUpperCase()}
      </div>
      <div class="text-2xl">
        {(
          gamesData[props.mode].answers[2] +
          " - " +
          gamesData[props.mode].answers[3]
        ).toLocaleUpperCase()}
      </div>
      <button
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => {
          do_share(props.mode, gamesData[props.mode], "share");
        }}
      >
        Share
      </button>
      <button
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => {
          do_share(props.mode, gamesData[props.mode], "image");
        }}
      >
        <div class="flex items-center">
          <div class="mr-2">Share as Image</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            viewBox="0 0 248 204"
            fill="white"
          >
            <g>
              <path
                d="M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04
		C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66
		c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64
		c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76
		c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26
		c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z"
              />
            </g>
          </svg>
        </div>
      </button>
      <button
        type="button"
        class="text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => {
          do_share(props.mode, gamesData[props.mode], "clipboard");
        }}
      >
        Copy to Clipboard
      </button>
    </div>
  );
};

export default ScoreResults;
