import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, Subject } from 'rxjs';
import { Pokemon } from '../Models/pokemon.model';
import { PokemonResponseObject } from '../Models/pokemon-response-object.model';
import { Move } from '../Models/move.model';
import { Ability } from '../Models/ability.model';
import { Type }  from '../Models/type.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  error : any = new Subject<string>();
  constructor(private http: HttpClient) {}

  getPokemon(url: string) : Observable<Pokemon> {
    return this.http.get<PokemonResponseObject>(url).pipe(
      map(response => this.processResponse(response)),
      catchError(error => {
        this.error.next(error.message);
        return of(error);
      })
    );
  }

  processResponse(response: any) : Pokemon {
    if (response === null) {
      throw new Error("unable to format null or undefined object!");
    }
    return {
      id: response.id,
      name: response.name,
      imgSrc: response.sprites.other['official-artwork'].front_default,
      types: response.types.map((type: any) => (<Type> {
        name : type.type.name
      })),
      details: {
        abilities: response.abilities.map((ability: any) => (<Ability> {
          name: ability.ability.name,
          url: ability.ability.url
        })),
        height: response.height,
        moves: response.moves.map((move: any) => (<Move> {
           name: move.move.name,
           url: move.move.url
        })),
        weight: response.weight
      }    
  }
}
}
