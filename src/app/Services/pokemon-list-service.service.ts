import { Injectable } from '@angular/core';
import { HttpClient,} from '@angular/common/http';
import { catchError, Observable, of, Subject, throwError } from 'rxjs';

import { PokemonListResponse } from '../Models/pokemon-list-response.model';


@Injectable({
  providedIn: 'root'
})
export class PokemonListService {
  error : string = '';
  URL : string = 'https://pokeapi.co/api/v2/pokemon'
  constructor(private http: HttpClient) {}

  getPokemonList() : Observable<PokemonListResponse> {
    return this.http.get<PokemonListResponse>(this.URL).pipe(
      catchError(error => {
        this.error = error.message;
        return throwError(error);
      })
      );
  }

}
