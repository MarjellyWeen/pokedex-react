import React, { FC, useCallback, useMemo } from "react";
import { useNavigate, useParams } from "react-router";
import { style } from "typestyle";
import { useDeleteSavedPokemon } from "../../state/hooks/useDeleteSavedPokemon";
import { useGetSavedPokemon } from "../../state/hooks/useGetSavedPokemon";
import { useGetPokemon } from "../../state/hooks/useGetPokemon";
import { usePostPokemon } from "../../state/hooks/usePostPokemon";
import { gradientsTypeColors } from "../../styling/colors.constant";
import { spacing } from "../../styling/spacing.constant";
import { ButtonElement } from "../elements/button.element";
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
  const { savedPokemon: favorites, refetch: getFavorites } =
    useGetSavedPokemon("favorites");
  const { call: createFavorite } = usePostPokemon("favorites");
  const { call: removeFavorite } = useDeleteSavedPokemon("favorites");

  const { savedPokemon: team, refetch: getTeam } = useGetSavedPokemon("team");
  const { call: addToTeam } = usePostPokemon("team");
  const { call: removeFromTeam } = useDeleteSavedPokemon("team");

  // A useCallback function to post a pokemon to the favorites list.
  // This function checks if the pokemon is already in the favorites list before posting.
  const handleFavoritesClick = useCallback(() => {
    // Check if result.pokemon exists else return.
    if (!result.pokemon) {
      return;
    }
    // Check if the pokemon is already in the favorites list.
    if (
      favorites?.find((favorite) => favorite.name === result?.pokemon?.name)
    ) {
      // If the pokemon is already in the favorites list, remove it. And refetch the favorites list.
      removeFavorite(result.pokemon.id);
      getFavorites();
    } else if (
      // If the pokemon is not in the favorites list, add it. And refetch the favorites list.
      favorites?.find((favorite) => favorite.name === result?.pokemon?.name) ===
      undefined
    ) {
      createFavorite(
        result.pokemon.name,
        result.pokemon.id,
        result.pokemon.types,
        result.pokemon.sprites
      );
      getFavorites();
    }
  }, [result.pokemon, favorites, createFavorite, removeFavorite, params.name]);

  // TODO clean this up, it could be combined with the above function, handleFavoritesClick.
  const handleAddToTeamClick = useCallback(() => {
    if (!result.pokemon) {
      return;
    }
    if (team?.length === 6) {
      return;
    }
    if (team?.find((teamItem) => teamItem.name === result?.pokemon?.name)) {
      removeFromTeam(result.pokemon.id);
      getTeam();
    } else if (
      team?.find((teamItem) => teamItem.name === result?.pokemon?.name) ===
      undefined
    ) {
      addToTeam(
        result.pokemon.name,
        result.pokemon.id,
        result.pokemon.types,
        result.pokemon.sprites
      );
      getTeam();
    }
  }, [result.pokemon, team, addToTeam, removeFromTeam, params.name]);

  const isFavorite = useMemo(() => {
    if (
      favorites?.find((favorite) => favorite.name === result?.pokemon?.name)
    ) {
      return true;
    } else {
      return false;
    }
  }, [getFavorites]);

  return (
    <div
      className="App"
      id="app"
      style={{
        background:
          gradientsTypeColors[result.pokemon?.types[0].type.name ?? "normal"],
      }}
    >
      <Header
        title={result.pokemon?.name}
        isLigthTheme
        onFavoriteClick={handleFavoritesClick}
        isFavorite={isFavorite}
        themeColor={
          gradientsTypeColors[result.pokemon?.types[0].type.name ?? "normal"]
        }
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
      <div className={styles.buttonContainer}>
        <ButtonElement
          text="Add to team"
          attributes={{ onClick: handleAddToTeamClick }}
        />
      </div>
    </div>
  );
};

const styles = {
  container: style({
    paddingTop: spacing.headerSpace,
  }),
  buttonContainer: style({
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    paddingBottom: spacing.baseSpacing * 2,
  }),
};
