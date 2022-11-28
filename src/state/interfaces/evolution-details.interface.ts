import { IModel } from "./model.interface";

export interface IEvolutionDetails {
  gender: number;
  held_item: IModel;
  item: IModel;
  known_move: IModel;
  known_move_type: IModel;
  location: IModel;
  min_affection: number;
  min_beauty: number;
  min_happiness: number;
  min_level: number;
  needs_overworld_rain: boolean;
  party_species: IModel;
  party_type: IModel;
  relative_physical_stats: number;
  time_of_day: string;
  trade_species: IModel;
  trigger: IModel;
  turn_upside_down: boolean;
}
