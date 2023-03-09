import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { of, throwError } from 'rxjs';
import { PokemonListResponse } from "../Models/pokemon-list-response.model";
import { PokemonListService } from "./pokemon-list-service.service";

describe ('Pokemon List Service ', () => {
    let service : PokemonListService;
    let httpClientSpy : jasmine.SpyObj<HttpClient>;

    beforeEach(() => {
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
        service = new PokemonListService(httpClientSpy);
    });

    it ('should return an array of pokemon details, each detail composed of name and url (happy path)', (done: DoneFn) => {
        const pokemonListMockedInfo : PokemonListResponse = { 
            count : 1281,
            next:"https://pokeapi.co/api/v2/pokemon?offset=20&limit=20",  
            previous:null,
            results : [
              {
                name:"bulbasaur",
                url:"https://pokeapi.co/api/v2/pokemon/1/"
              },
              {
                name:"bulbasaur",
                url:"https://pokeapi.co/api/v2/pokemon/1/"
              },
              {
                name:"bulbasaur",
                url:"https://pokeapi.co/api/v2/pokemon/1/"
              }
            ]
        }

        httpClientSpy.get.and.returnValue(of(pokemonListMockedInfo));

        service.getPokemonList().subscribe({
            next: PokeList => {
                expect(PokeList)
                    .withContext('expected response')
                    .toEqual(pokemonListMockedInfo);
                done();
            }, 
            error: done.fail
        });
        expect(httpClientSpy.get.calls.count())
            .withContext('one call')
            .toBe(1);
    });

    it ('Should Notify Upon Getting Error (sad path)' , () => {
        httpClientSpy.get.and.callFake(() => {
            return throwError({
                message: "Error!"
            });
        });
        service.getPokemonList().subscribe({
            error: (error) => {
                expect(service.error).toBeTruthy();
                expect(service.error?.message).toBe("Error!");
            }
        });
    }); 

    
});


