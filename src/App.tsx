import { Route, Routes } from "solid-app-router";
import { Component, createMemo, useContext } from "solid-js";
import Game from "./Game";
import { GamesDataContext } from "./GameDataProvider";

const App: Component = () => {
  const context = createMemo(() => useContext(GamesDataContext));
  return context() ? (
    <Routes>
      <Route path="/dev" element={<Game mode="daily" />} />
      <Route path="/dev/practice" element={<Game mode="free" />} />
    </Routes>
  ) : null;
};

export default App;