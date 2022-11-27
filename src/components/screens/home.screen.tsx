import React, { FC } from "react";
import { Header } from "../elements/header.element";
import { InputElement } from "../elements/input.element";

export const Home: FC = () => {
  return (
    <div className="App">
      <Header />
      <InputElement
        attributes={{
          name: "search",
          placeholder: "Pokemon zoeken",
        }}
      />
    </div>
  );
};
