import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, map } from 'rxjs';
import { EvolutionSpeciesResponse } from '../Models/evolution-chain-response.model';
import { Species } from '../Models/pokemon-link.model';
import { LinkTypes } from 'src/app/Models/link-types-enums.model';

@Injectable({
  providedIn: 'root'
})
export class EvolutionChainService {

  private urlSpecies : string = 'https://pokeapi.co/api/v2/pokemon-species';
  constructor(private http: HttpClient) { }

  getEvoSpeciesInfo(speciesId: string) : Observable<EvolutionSpeciesResponse | null> {
    return this.http.get<EvolutionSpeciesResponse>(this.urlSpecies+"/"+speciesId).pipe(
      map(response => this.mapResponseSpecies(response))
    );
  }

  getInfoFromEvoChain(evolutionChainUrl : string) : Observable<Species | null> {
    return this.http.get<Species>(evolutionChainUrl).pipe(map((response) => this.mapResponseEvoChain(response)));
  }

  private mapResponseSpecies (response : any) : EvolutionSpeciesResponse {
    return {
      name: response.name,
      evolution_chain: response.evolution_chain.url,
      evolves_from_species: response.evolves_from_species    
    }
  }

  private mapResponseEvoChain (response : any) : Species {
    const species = response.chain.evolves_to.slice(0,1)[0]?.species;
    return (species) ? species : null;
  }

  getIdFromEvoChain(urlSpecies : string) : Observable<any> {
    return this.http.get<number>(urlSpecies);
  }

}
