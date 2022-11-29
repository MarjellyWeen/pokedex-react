import React, { FC } from "react";
import { useNavigate } from "react-router";
import { style } from "typestyle";
import { useGetFavorites } from "../../state/hooks/useGetFavorites";
import { gradientColors } from "../../styling/colors.constant";
import { spacing } from "../../styling/spacing.constant";
import { Header } from "../elements/header.element";
import { PokemonCard } from "../elements/pokemon-card.element";

export const Favorites: FC = () => {
  const navigate = useNavigate();
  const { favorites } = useGetFavorites();

  return (
    <div
      className="App"
      id="app"
      style={{
        background: gradientColors.favorites,
      }}
    >
      <Header
        title="Favorites"
        themeColor={gradientColors.favorites}
        onBackClick={() => navigate(-1)}
        isLigthTheme
      />
      <div className={styles.container}>
        {favorites?.map(({ name, id, sprites, types }) => (
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
