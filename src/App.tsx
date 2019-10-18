import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { LikeCounter } from "./LikeCounter";
import { TitleChanger } from "./TitleChanger";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Workshop (react + hooks + typescript)
        <LikeCounter />
        <TitleChanger />
      </header>
    </div>
  );
};

export default App;
