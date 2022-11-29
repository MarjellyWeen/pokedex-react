import axios from "axios";
import { useEffect, useState } from "react";
import { IPokemon } from "../interfaces/pokemon.interface";

export const useGetPokemon = (pokemonName: string) => {
  const [pokemon, setPokemon] = useState<IPokemon>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function getData() {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      const singleItem = Array.isArray(data) ? data[0] : data;
      setPokemon(singleItem);
    }
    try {
      setIsLoading(true);
      getData();
    } catch (error) {
      console.error(`Could not get pokemon. Error: ${error}`);
      setError(error);
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    pokemon,
  };
};
