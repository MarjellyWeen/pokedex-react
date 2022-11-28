import { useEffect, useState } from "react";
import { IEvolutionChain } from "../interfaces/evolution-chain.interface";
export const useEvolutionChain = (pokemonNumber: number) => {
  const [evolution, setEvolution] = useState<IEvolutionChain>();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/evolution-chain/${pokemonNumber}`)
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
