import { useEffect, useState } from "react";
import { IModel } from "../interfaces/model.interface";

export const useAllPokemon = (limit?: number, offset?: number) => {
  const [pokemonList, setPokemonList] = useState<IModel[]>([]);
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemonList(data.results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return { pokemonList };
};
