import { useEffect, useState, useCallback } from "react";
import { IPokemonBase } from "../interfaces/pokemon-base.interface";
import axios from "axios";

/**
 * A hook that will fetch all pokemon from the mock API
 * @returns {object} - An object with all pokemon
 * isLoading: boolean - Whether the data is being fetched
 * error: unknown - The error that occurred
 * savedPokemon: IPokemonBase[] - The list of saved pokemon
 * refetch: () => void - A function that will refetch the data
 */
export const useGetAllPokemon = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonList, setPokemonList] = useState<IPokemonBase[]>([]);
  const [error, setError] = useState<unknown>();
  const refetch = async () => getData();

  const getData = useCallback(async () => {
    async function fetchData() {
      // Fetch the data from the mock API
      const { data } = await axios.get(
        "https://stoplight.io/mocks/appwise-be/pokemon/57519009/pokemon"
      );
      // Set the data to the state
      setPokemonList(data);
    }
    // Try to fetch the data and set loading to true
    try {
      setIsLoading(true);
      fetchData();
    } catch (error: unknown) {
      // If there is an error, set the error to the state
      console.error(`Could not get list of pokemons. Error: ${error}`);
      setError(error);
    }
    // Set loading to false when the data is fetched
    setIsLoading(false);
  }, []);

  // Call the getData function when the component is mounted
  useEffect(() => {
    getData();
  }, [getData]);

  return {
    isLoading,
    error,
    pokemonList,
    refetch,
  };
};
