import React, { FC } from "react";
import { style } from "typestyle";
import { spacing } from "../../styling/spacing.constant";
import { Header } from "../elements/header.element";

export const Favorites: FC = () => {
  return (
    <div className="App" id="app">
      <Header title="Favorites" />
      <div className={styles.container}></div>
    </div>
  );
};

const styles = {
  container: style({
    paddingTop: spacing.headerSpace,
  }),
};
