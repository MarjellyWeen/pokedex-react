import React, { FC } from "react";
import { style } from "typestyle";
import { useAllPokemon } from "../../state/hooks/useAllPokemon";
import { Header } from "../elements/header.element";
import { NavButton } from "../elements/nav-button.element";
import { PokemonCard } from "../elements/pokemon-card.element";
import { SearchInput } from "../templates/search-input.template";

export const Home: FC = () => {
  return (
    <div className="App" id="app">
      <Header isListView />
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
      {useAllPokemon().pokemonList.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
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
