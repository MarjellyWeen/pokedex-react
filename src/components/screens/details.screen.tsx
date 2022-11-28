import React, { FC } from "react";
import { useNavigate, useParams } from "react-router";
import { style } from "typestyle";
import { usePokemon } from "../../state/hooks/usePokemon";
import { typeColors } from "../../styling/colors.constant";
import { spacing } from "../../styling/spacing.constant";
import { DetailImages } from "../elements/detail-images.element";
import { Header } from "../elements/header.element";
import { AboutCard } from "../templates/about-card.template copy";
import { MovesetCard } from "../templates/move-set-card.template";
import { StatCard } from "../templates/stat-card.template";

export const Details: FC = () => {
  const params = useParams<{ name: string }>();
  const navigate = useNavigate();

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
        themeColor={typeColors[result.pokemon?.types[0].type.name ?? "normal"]}
        onBackClick={() => navigate(-1)}
      />
      <div className={styles.container}>
        <DetailImages sprites={result.pokemon?.sprites} />
        {result.pokemon && <AboutCard pokemon={result.pokemon} />}
        {result.pokemon?.stats && <StatCard stats={result.pokemon?.stats} />}
        {result.pokemon?.moves && <MovesetCard moves={result.pokemon.moves} />}
        {/*  TODO: Render evolution chain properly (Set types correct) */}
        {/* {result.pokemon?.id && (
          <EvolutionCard pokemonNumber={result.pokemon?.id} />
        )} */}
      </div>
    </div>
  );
};

const styles = {
  container: style({
    paddingTop: spacing.headerSpace,
  }),
};
