import axios from "axios";
import { useCallback, useState } from "react";
import { IPokemonBase } from "../interfaces/pokemon-base.interface";

/**
 * @param type: "favorites" | "team" - The type of pokemon to fetch
 * @returns
 * isLoading: boolean - Whether the data is being fetched
 * error: unknown - The error that occurred
 * savedPokemon: IPokemonBase[] - The list of saved pokemon
 */
export const useDeleteSavedPokemon = (type: "favorites" | "team") => {
  // State variables
  const [pokemon, setPokemon] = useState<IPokemonBase>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  // A function that calls the API to delete a pokemon by id
  const call = useCallback((id: number) => {
    // A function that will delete the pokemon
    async function deleteData() {
      // Await the response from the API and set the pokemon to the state
      const { data } = await axios.delete(
        `http://localhost:3004/${type}/${id}`
      );
      const singleItem = Array.isArray(data) ? data[0] : data;
      setPokemon(singleItem);
    }
    // Try to delete the pokemon
    // If there is an error, log it and set the error to the state
    /// Otherwise, set the pokemon to the state
    try {
      setIsLoading(true);
      deleteData();
    } catch (error) {
      console.error(`Could not delete pokemon. Error: ${error}`);
      setError(error);
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    pokemon,
    call,
  };
};
