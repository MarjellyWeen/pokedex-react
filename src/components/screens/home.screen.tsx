import React, { FC, useEffect, useRef, useState } from "react";
import { style } from "typestyle";
import { useGetAllPokemon } from "../../state/hooks/useGetAllPokemon";
import { useGetFavorites } from "../../state/hooks/useGetFavorites";
import { IPokemonBase } from "../../state/interfaces/pokemon-base.interface";
import { spacing } from "../../styling/spacing.constant";
import { Header } from "../elements/header.element";
import { NavButton } from "../elements/nav-button.element";
import { PokemonCard } from "../elements/pokemon-card.element";
import { Popover } from "../elements/popover.element";
import { SearchInput } from "../templates/search-input.template";

export const Home: FC = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredPokemon, setFilteredPokemon] = useState<IPokemonBase[]>([]);
  const [asc, setAsc] = useState(true);

  const openFilters = useRef(() => {
    setShowFilters(true);
  }).current;

  const closeFilters = useRef(() => {
    setShowFilters(false);
  }).current;

  const { pokemonList } = useGetAllPokemon();
  const { favorites } = useGetFavorites();

  // A useCallback function to sort the pokemon by name asc or desc
  const sortPokemon = (asc: boolean) => {
    const sortedPokemon = [...filteredPokemon].sort((a, b) => {
      if (asc) {
        return a.name > b.name ? 1 : -1;
      } else {
        return a.name < b.name ? 1 : -1;
      }
    });

    setFilteredPokemon(sortedPokemon);
  };

  //useEffect to update list of pokemon by name or number based on search. with timeout to prevent too many renders
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (search) {
        const filteredPokemon = pokemonList.filter((pokemon) => {
          return (
            pokemon.name.includes(search) ||
            pokemon.id.toString().includes(search)
          );
        });
        setFilteredPokemon(filteredPokemon);
      } else {
        setFilteredPokemon(pokemonList);
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [search, pokemonList]);

  return (
    <div className="App" id="app">
      <Popover onCloseClick={closeFilters} toggled={showFilters} />

      <Header
        onFilterClick={openFilters}
        onSortClick={() => {
          setAsc(!asc);
          sortPokemon(asc);
        }}
      />
      <div className={styles.container}>
        <SearchInput
          onChangeTimeoutMilliseconds={500}
          attributes={{
            name: "search",
            placeholder: "Pokemon zoeken",
            defaultValue: search,
            onChange: (event) => setSearch(event.target.value),
          }}
          iconName="magnifying-glass"
        />
        <div className={styles.buttonContainer}>
          <NavButton key="team" />{" "}
          <NavButton isFavorites key="favorites" count={favorites?.length} />
        </div>
        {filteredPokemon.map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            name={pokemon.name}
            id={pokemon.id}
            types={pokemon.types}
            sprites={pokemon.sprites}
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
