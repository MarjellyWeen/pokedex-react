import React, { FC } from "react";
import { useEvolutionChain } from "../../state/hooks/useEvolutionChain";
import { DetailCard } from "../elements/detail-card.element";
import { PokemonCard } from "../elements/pokemon-card.element";

interface IProps {
  pokemonNumber: number;
}

export const EvolutionCard: FC<IProps> = ({ pokemonNumber }) => {
  const evolutionChain = useEvolutionChain(pokemonNumber);

  if (!evolutionChain) return null;

  // TODO: Render evolution chain properly (Set types correct)
  return (
    <DetailCard name="Evolution">
      {evolutionChain.evolution?.chain.map((chain) => (
        <PokemonCard
          key={chain.species.name}
          pokemonName={chain.species.name}
        />
      ))}
    </DetailCard>
  );
};
