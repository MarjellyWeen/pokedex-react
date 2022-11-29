import { useEffect, useState, useCallback } from "react";
import { IPokemonBase } from "../interfaces/pokemon-base.interface";
import axios from "axios";

export const useGetAllPokemon = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonList, setPokemonList] = useState<IPokemonBase[]>([]);
  const [error, setError] = useState<unknown>();

  const refetch = async () => getData();

  const getData = useCallback(async () => {
    async function fetchData() {
      const { data } = await axios.get(
        "https://stoplight.io/mocks/appwise-be/pokemon/57519009/pokemon"
      );
      setPokemonList(data);
    }
    try {
      setIsLoading(true);
      fetchData();
    } catch (error: unknown) {
      console.error(`Could not get list of pokemons. Error: ${error}`);
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
    pokemonList,
    refetch,
  };
};
