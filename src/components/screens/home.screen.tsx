import React, { FC, useRef, useState } from "react";
import { style } from "typestyle";
import { useAllPokemon } from "../../state/hooks/useAllPokemon";
import { spacing } from "../../styling/spacing.constant";
import { Header } from "../elements/header.element";
import { NavButton } from "../elements/nav-button.element";
import { PokemonCard } from "../elements/pokemon-card.element";
import { Popover } from "../elements/popover.element";
import { SearchInput } from "../templates/search-input.template";

export const Home: FC = () => {
  const [showFilters, setShowFilters] = useState(false);

  const openFilters = useRef(() => {
    setShowFilters(true);
  }).current;

  const closeFilters = useRef(() => {
    setShowFilters(false);
  }).current;

  const pokemon = useAllPokemon();

  return (
    <div className="App" id="app">
      <Popover onCloseClick={closeFilters} toggled={showFilters} />

      <Header
        onFilterClick={openFilters}
        onSortClick={() => console.log("sort!")}
      />
      <div className={styles.container}>
        <SearchInput
          onChangeTimeoutMilliseconds={500}
          attributes={{
            name: "search",
            placeholder: "Pokemon zoeken",
            // defaultValue: searchQuery,
            // onChange: (event) => setSearchQuery(event.target.value),
          }}
          iconName="magnifying-glass"
        />
        <div className={styles.buttonContainer}>
          <NavButton key="team" /> <NavButton isFavorites key="favorites" />
        </div>
        {pokemon.pokemonList.map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            pokemonName={pokemon.name}
            pokemonId={pokemon.id}
            pokemonSprites={pokemon.sprites}
            pokemonTypes={pokemon.types}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: style({
    paddingTop: spacing.headerSpace,
  }),
  buttonContainer: style({
    display: "flex",
    gap: 9,
    marginTop: 19,
    marginBottom: 20,
  }),
};
