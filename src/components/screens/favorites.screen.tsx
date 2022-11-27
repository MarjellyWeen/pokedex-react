import React, { FC } from "react";
import { Header } from "../elements/header.element";

export const Favorites: FC = () => {
  return (
    <div className="App" id="app">
      <Header />
      <header className="App-header">
        <h1>Favorites</h1>
      </header>
    </div>
  );
};
