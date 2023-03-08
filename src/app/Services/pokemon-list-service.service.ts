import { ErrorHandler, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { catchError, map, Observable, Subject } from 'rxjs';

import { PokemonListResponseObject, PokemonListResponse } from '../Models/pokemon-list-response.model';


@Injectable({
  providedIn: 'root'
})
export class PokemonListService implements ErrorHandler {
  error : any = new Subject<string>();
  URL : string = 'https://pokeapi.co/api/v2/pokemon'
  constructor(private http: HttpClient) {}

  getPokemonList() : Observable<PokemonListResponse> {
    return this.http.get<PokemonListResponse>(this.URL).pipe(
      map(response => this.processResponse(response))
      );
  }

  private processResponse(response : PokemonListResponse) : PokemonListResponse {
     return {
      count: response.count,
      next: response.next,
      previous: response.previous,
      results: response.results.map((pokemon: any) => (<PokemonListResponseObject> {
          name : pokemon.name,
          url  : pokemon.url 
       })
      )
     }
  }

  handleError(error: HttpErrorResponse) {
    throw new Error('Error status: ' + error.status + ' \n Error Message: ' + error.message );
  }

}
