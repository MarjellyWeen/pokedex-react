import React, { FC, useCallback } from "react";
import { useNavigate, useParams } from "react-router";
import { style } from "typestyle";
import { useDeleteFavoritePokemon } from "../../state/hooks/useDeleteFavoritePokemon";
import { useGetFavorites } from "../../state/hooks/useGetFavorites";
import { useGetPokemon } from "../../state/hooks/useGetPokemon";
import { usePostFavoritePokemon } from "../../state/hooks/usePostFavoritePokemon";
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

  const result = useGetPokemon(params.name);
  const { favorites } = useGetFavorites();

  // A function to post a pokemon to the favorites list
  const { call: create } = usePostFavoritePokemon();
  const { call: remove } = useDeleteFavoritePokemon();

  // A useCallback function to post a pokemon to the favorites list.
  // This function checks if the pokemon is already in the favorites list before posting.
  const handleFavoritesClick = useCallback(() => {
    if (!result.pokemon) {
      return;
    }
    if (
      favorites?.find((favorite) => favorite.name === result?.pokemon?.name)
    ) {
      remove(result.pokemon.id);
    }
    create(
      result.pokemon.name,
      result.pokemon.id,
      result.pokemon.types,
      result.pokemon.sprites
    );
  }, [result.pokemon, favorites, create, remove, params.name]);

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
        onFavoriteClick={handleFavoritesClick}
        isFavorite={
          favorites?.find((favorite) => favorite.name === result?.pokemon?.name)
            ? true
            : false
        }
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
