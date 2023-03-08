import { sprite } from "./sprite.model";
import { Type } from "./type.model";

export interface PokemonResponseObject {
    abilities: any[],
    height: number,
    id: number,
    moves: any[],
    name: string,
    sprites: sprite,
    types: Type[],
    weight: number
}