import { IModel } from "./model.interface";
import { ISprites } from "./sprites.interface";

export interface IPokemon {
  id: number;
  name: string;
  order: number;
  weight: number;
  height: number;
  base_experience: number;
  sprites: ISprites;
  types: {
    slot: number;
    type: IModel;
  }[];
}
