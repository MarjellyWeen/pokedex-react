import { useEffect, useState } from "react";
import { IEvolutionChain } from "../interfaces/evolution-chain.interface";

/**
 * A hook that will fetch the evolution chain of a pokemon
 * @param {number} pokemonId - The id of the pokemon
 * @returns {object} - An object with the evolution chain of the pokemon
 * evolution: IEvolutionChain - The evolution chain of the pokemon
 */
export const useEvolutionChain = (pokemonId: number) => {
  const [evolution, setEvolution] = useState<IEvolutionChain>();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/evolution-chain/${pokemonId}`)
      .then((response) => response.json())
      .then((data) => {
        setEvolution(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return { evolution };
};
