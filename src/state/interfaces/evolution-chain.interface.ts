import { IEvolutionDetails } from "./evolution-details.interface";
import { IModel } from "./model.interface";

export interface IEvolutionChain {
  id: number;
  baby_trigger_item: IModel;
  chain: {
    evolution_details: IEvolutionDetails[];
    evolves_to: {
      evolution_details: IEvolutionDetails[];
      evolves_to: {
        evolution_details: IEvolutionDetails[];
        is_baby: boolean;
        evolves_to: {
          evolution_details: IEvolutionDetails[];
          is_baby: boolean;
        }[];
      };
      is_baby: boolean;
    };
    is_baby: boolean;
    species: IModel;
  }[];
  species: IModel;
}
