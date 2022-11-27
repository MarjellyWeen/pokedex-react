import React, { FC } from "react";
import { style } from "typestyle";
import { Header } from "../elements/header.element";
import { InputElement } from "../elements/input.element";
import { NavButton } from "../elements/nav-button.element";

export const Home: FC = () => {
  return (
    <div className="App" id="app">
      <Header isListView />
      <InputElement
        attributes={{
          name: "search",
          placeholder: "Pokemon zoeken",
        }}
      />
      <div className={styles.buttonContainer}>
        <NavButton key="team" /> <NavButton isFavorites key="favorites" />
      </div>
    </div>
  );
};

const styles = {
  buttonContainer: style({
    display: "flex",
    gap: 9,
    marginTop: 19,
    marginBottom: 20,
  }),
};
