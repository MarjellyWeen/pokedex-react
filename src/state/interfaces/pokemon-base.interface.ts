import { IModel } from "./model.interface";
import { ISprites } from "./sprites.interface";

export interface IPokemonBase {
  id: number;
  name: string;
  sprites: ISprites;
  types: {
    slot: number;
    type: IModel;
  }[];
}
