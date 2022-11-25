import React, { FC } from "react";

export const Home: FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>A Simple Pokedex</h1>
        <a
          className="App-link"
          href={window.location.origin}
          rel="noopener noreferrer"
        >
          Go to Pokemon Overview
        </a>
      </header>
    </div>
  );
};
