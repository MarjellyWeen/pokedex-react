import { IType } from "./type.interface";

export interface IPokemon {
  id: number;
  name: string;
  order: number;
  weight: number;
  height: number;
  base_experience: number;
  sprites: {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
  };
  types: {
    slot: number;
    type: IType;
  }[];
}
