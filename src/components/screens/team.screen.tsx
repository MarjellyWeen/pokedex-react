import React, { FC } from "react";
import { useNavigate } from "react-router";
import { style } from "typestyle";
import { useGetSavedPokemon } from "../../state/hooks/useGetSavedPokemon";
import { gradientColors } from "../../styling/colors.constant";
import { spacing } from "../../styling/spacing.constant";
import { Header } from "../elements/header.element";
import { PokemonCard } from "../elements/pokemon-card.element";

export const Team: FC = () => {
  const navigate = useNavigate();

  // Get the team from the saved pokemon list.
  const { savedPokemon: team } = useGetSavedPokemon("team");

  return (
    <div
      className="App"
      id="app"
      style={{
        background: gradientColors.team,
      }}
    >
      <Header
        title="Team"
        themeColor={gradientColors.team}
        onBackClick={() => navigate(-1)}
        isLigthTheme
      />
      <div className={styles.container}>
        {team?.map(({ name, id, sprites, types }) => (
          <PokemonCard
            key={name}
            name={name}
            id={id}
            types={types}
            sprites={sprites}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: style({
    paddingTop: spacing.headerSpace + spacing.baseSpacing,
  }),
};
