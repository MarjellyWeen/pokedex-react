import axios from "axios";
import { useEffect, useState } from "react";
import { IPokemon } from "../interfaces/pokemon.interface";

/**
 * A hook that will fetch a pokemon from the mock API
 * @param {string} pokemonName - The name of the pokemon
 * @returns {object} - An object with the pokemon
 * isLoading: boolean - Whether the data is being fetched
 * error: unknown - The error that occurred
 * pokemon: IPokemon - The pokemon
 */
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
