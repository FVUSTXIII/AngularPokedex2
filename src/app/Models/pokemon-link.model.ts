import { LinkTypes } from "./link-types-enums.model";

export interface Species {
    name: string;
    url: string;
}

export interface PokemonLink {
    id : number;
    name : string;
    linkType: LinkTypes;
}