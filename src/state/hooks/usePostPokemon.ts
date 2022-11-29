import axios from "axios";
import { useCallback, useState } from "react";
import { IModel } from "../interfaces/model.interface";
import { IPokemonBase } from "../interfaces/pokemon-base.interface";

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
