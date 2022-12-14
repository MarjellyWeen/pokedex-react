import axios from "axios";
import { useCallback, useState } from "react";
import { IModel } from "../interfaces/model.interface";
import { IPokemonBase } from "../interfaces/pokemon-base.interface";

/**
 * A hook that will post a pokemon to the fake API (JSON Server)
 * @param type: "favorites" | "team" - The type of pokemon to fetch
 * @returns
 * isLoading: boolean - Whether the data is being fetched
 * error: unknown - The error that occurred
 * savedPokemon: IPokemonBase[] - The list of saved pokemon
 * refetch: () => Promise<void> - A function that will refetch the data
 * call: (id: number) => Promise<void> - A function that will delete the pokemon by id
 */
export const usePostPokemon = (type: "favorites" | "team") => {
  // create state variables
  const [pokemon, setPokemon] = useState<IPokemonBase>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  const call = useCallback(
    (
      name: string,
      id: number,
      types: {
        slot: number;
        type: IModel;
      }[],
      sprites: {
        front_default: string;
      }
    ) => {
      async function postData() {
        const { data } = await axios.post(`http://localhost:3004/${type}`, {
          name,
          id,
          types,
          sprites,
        });
        const singleItem = Array.isArray(data) ? data[0] : data;
        setPokemon(singleItem);
      }
      try {
        setIsLoading(true);
        postData();
      } catch (error) {
        console.error(`Could not post pokemon. Error: ${error}`);
        setError(error);
      }
      setIsLoading(false);
    },
    []
  );

  return {
    isLoading,
    error,
    pokemon,
    call,
  };
};
