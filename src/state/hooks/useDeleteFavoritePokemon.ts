import axios from "axios";
import { useCallback, useState } from "react";
import { IPokemonBase } from "../interfaces/pokemon-base.interface";

export const useDeleteFavoritePokemon = () => {
  // create state variables
  const [pokemon, setPokemon] = useState<IPokemonBase>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  const call = useCallback((id: number) => {
    async function deleteData() {
      const { data } = await axios.delete(
        `http://localhost:3004/favorites/${id}`
      );
      const singleItem = Array.isArray(data) ? data[0] : data;
      setPokemon(singleItem);
    }
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
