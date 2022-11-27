/*
 * IModel Interface can be used for any object that has the same structure.
 * For example, the following objects have the same structure as Imodel:
 * - "type" is an object property of IPokemon
 * - Objects fetched with "https://pokeapi.co/api/v2/pokemon" url
 * - More to follow...
 **/
export interface IModel {
  name: string;
  url: string;
}
