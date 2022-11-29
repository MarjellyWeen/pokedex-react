import React, { FC, useEffect, useState } from "react";
import { style } from "typestyle";
import { useGetAllPokemon } from "../../state/hooks/useGetAllPokemon";
import { useGetSavedPokemon } from "../../state/hooks/useGetSavedPokemon";
import { IPokemonBase } from "../../state/interfaces/pokemon-base.interface";
import { spacing } from "../../styling/spacing.constant";
import { Header } from "../elements/header.element";
import { NavButton } from "../elements/nav-button.element";
import { PokemonCard } from "../elements/pokemon-card.element";
import { Popover } from "../elements/popover.element";
import { SelectTab } from "../elements/select-tab.element";
import { Spinner } from "../elements/spinner.element";
import { SearchInput } from "../templates/search-input.template";

export const Home: FC = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredPokemon, setFilteredPokemon] = useState<IPokemonBase[]>([]);
  const [asc, setAsc] = useState(true);

  const { pokemonList, isLoading } = useGetAllPokemon();
  const { savedPokemon: favorites } = useGetSavedPokemon("favorites");
  const { savedPokemon: team } = useGetSavedPokemon("team");

  const favoritesCount = favorites?.length || 0;
  const teamCount = team?.length || 0;

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
      <Popover
        onCloseClick={() => setShowFilters(false)}
        toggled={showFilters}
        title="Sort by"
      >
        <div className={styles.tabContainer}>
          <SelectTab
            icon="arrow-up-a-z"
            isSelected={true}
            text="Alphabetically ascending"
          />
          <SelectTab
            icon="arrow-down-z-a"
            isSelected={false}
            text="Alphabetically descending"
          />
          <SelectTab
            icon="arrow-up-1-9"
            isSelected={false}
            text="Numerically ascending"
          />
          <SelectTab
            icon="arrow-down-9-1"
            isSelected={false}
            text="Numerically descending"
          />
        </div>
      </Popover>

      <Header
        onFilterClick={() => setShowFilters(true)}
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
          <NavButton key="team" count={teamCount} />
          <NavButton isFavorites key="favorites" count={favoritesCount} />
        </div>
        <Spinner show={isLoading} />
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
  tabContainer: style({
    display: "flex",
    flexDirection: "column",
    gap: 9,
  }),
};
