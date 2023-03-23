import { Species } from "./pokemon-link.model";

export interface EvolutionSpeciesResponse {
    name : string;
    evolution_chain : string | null;
    evolves_from_species : Species | null;
}