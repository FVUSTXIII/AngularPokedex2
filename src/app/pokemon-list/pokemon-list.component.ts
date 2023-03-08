import { Component, OnInit } from '@angular/core';
import { PokemonListResponseObject } from '../Models/pokemon-list-response.model';
import { PokemonListService } from '../Services/pokemon-list-service.service';
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
  providers: [PokemonListService]
})
export class PokemonListComponent implements OnInit {

  basePokeList : PokemonListResponseObject[] = [];

  constructor(private pokeListService: PokemonListService) { }


  ngOnInit(): void {
    this.onGetPokemons();
  }

  onGetPokemons() : void  {
    this.pokeListService.getPokemonList().subscribe(
      (response) => {
        response.results.forEach(pokemon => {
          let poke : PokemonListResponseObject = {
            name : pokemon.name,
            url  : pokemon.url
          }
          this.basePokeList.push(poke);
        })
      },
      (error) => {
        console.error(error)
      },
      () => {
      }
    );
  }
}
