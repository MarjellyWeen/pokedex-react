/*
 * Interface can be used for any object that has the same structure as this interface.
 * For example, the following object has the same structure as the IPokemon interface:
 * - "type" is a property of IPokemon
 * - Objects fetched with "https://pokeapi.co/api/v2/pokemon" url
 * - More to follow...
 **/
export interface IType {
  name: string;
  url: string;
}
