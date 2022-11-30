import { useEffect, useState, useCallback } from "react";

import axios from "axios";
import { IPokemonBase } from "../interfaces/pokemon-base.interface";

export const useGetSavedPokemon = (type: "favorites" | "team") => {
  const [isLoading, setIsLoading] = useState(true);
  const [savedPokemon, setSavedPokemon] = useState<IPokemonBase[]>();
  const [error, setError] = useState<unknown>();

  const refetch = async () => getData();

  const getData = useCallback(async () => {
    async function fetchData() {
      const { data } = await axios.get(`http://localhost:3004/${type}`);
      setSavedPokemon(data);
    }
    try {
      setIsLoading(true);
      fetchData();
    } catch (error: unknown) {
      console.error(`Could not get ${type}. Error: ${error}`);
      setError(error);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return {
    isLoading,
    error,
    savedPokemon,
    refetch,
  };
};
