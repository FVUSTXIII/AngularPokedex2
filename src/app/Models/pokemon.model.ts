import { Type } from "./type.model";
import { PokemonDetails } from "./pokemon-details.model";
export interface Pokemon {
    name: string;
    id: number | null;
    imgSrc: string | null;
    types : Type[] | null;
    details : PokemonDetails | null;    
}
