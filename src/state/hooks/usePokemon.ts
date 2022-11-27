import { useEffect, useState } from "react";
import { IPokemon } from "../interfaces/pokemon.interface";
export const usePokemon = (pokemonName: string) => {
  const [pokemon, setPokemon] = useState<IPokemon>();
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return { pokemon };
};
