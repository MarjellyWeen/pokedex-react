import { useEffect, useState } from "react";
import { IPokemonBase } from "../interfaces/pokemon-base.interface";

export const useAllPokemon = () => {
  const [pokemonList, setPokemonList] = useState<IPokemonBase[]>([]);
  useEffect(() => {
    fetch(`https://stoplight.io/mocks/appwise-be/pokemon/57519009/pokemon`)
      .then((response) => response.json())
      .then((data) => {
        setPokemonList(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return { pokemonList };
};
