import { Ability } from "./ability.model";
import { Move } from "./move.model";

export interface PokemonDetails {
    height : number | null;
    weight : number | null;
    abilities : Ability[];
    moves : Move[];

}
