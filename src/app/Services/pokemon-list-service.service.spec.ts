import { HttpClient } from "@angular/common/http";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { inject, TestBed } from "@angular/core/testing";
import { of, throwError } from 'rxjs';
import { PokemonListResponse } from "../Models/pokemon-list-response.model";
import { PokemonListService } from "./pokemon-list-service.service";

describe ('Pokemon List Service ', () => {
    let httpClientSpy  = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put', 'delete']);
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [{provide: HttpClient, useValue: httpClientSpy}, PokemonListService],
            imports: [HttpClientTestingModule]
        });
    });

    it ('should return an array of pokemon details, each detail composed of name and url (happy path)', inject([PokemonListService], (service : PokemonListService) => {
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
        spyOn(service, 'getPokemonList').and.returnValue(of(pokemonListMockedInfo));
        service.getPokemonList().subscribe((pokeList) => {
            expect(pokeList).toEqual(pokemonListMockedInfo)
        });
    }));

    it ('Should Notify Upon Getting Error (sad path)' , inject([PokemonListService], async (service: PokemonListService) => {
        
        spyOn(service, 'getPokemonList').and.returnValue(throwError({ message: 'Error!!!' }));
        service.getPokemonList().subscribe({
            error: (error) => {
            },
            complete: () => {
                expect(service.error).toBe('Error!!!');
            }
        });
    
    })); 

    
});


