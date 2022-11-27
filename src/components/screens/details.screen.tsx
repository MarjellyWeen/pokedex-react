import React, { FC } from "react";
import { useParams } from "react-router";
import { usePokemon } from "../../state/hooks/usePokemon";
import { typeColors } from "../../styling/colors.constant";
import { DetailImages } from "../elements/detail-images.template";
import { Header } from "../elements/header.element";

export const Details: FC = () => {
  const params = useParams<{ name: string }>();

  if (!params.name) return null;

  const result = usePokemon(params.name);

  return (
    <div
      className="App"
      id="app"
      style={{
        background: typeColors[result.pokemon?.types[0].type.name ?? "normal"],
      }}
    >
      <Header
        title={result.pokemon?.name}
        isLigthTheme
        onFavoriteClick={() => console.log("fav!")}
      />
      <DetailImages sprites={result.pokemon?.sprites} />
    </div>
  );
};
