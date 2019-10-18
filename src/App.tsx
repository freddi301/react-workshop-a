import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { LikeCounter } from "./LikeCounter";
import { TitleChanger } from "./TitleChanger";
import { Arcobaleno } from "./Arcobaleno";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Workshop (react + hooks + typescript)
        <LikeCounter />
        <TitleChanger />
        <Arcobaleno />
      </header>
    </div>
  );
};

export default App;
