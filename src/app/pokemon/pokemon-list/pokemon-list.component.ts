import { Component, OnInit } from '@angular/core';
import { PokemonListResponseObject } from '../../Models/pokemon-list-response.model';
import { PokemonListService } from '../../Services/pokemon-list-service.service';
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
  providers: [PokemonListService]
})
export class PokemonListComponent implements OnInit {

  basePokeList : PokemonListResponseObject[] = [];
  errorMsg : string = '';
  constructor(private pokeListService: PokemonListService) { }

  ngOnInit(): void {
    console.log('This component is alive');
    this.onGetPokemons();
  }

  onGetPokemons() : void  {
    this.errorMsg = '';
    this.pokeListService.getPokemonList().subscribe(
      (response) => {
        console.log("se recibio esta informacion: " , response)
        response.results.forEach(pokemon => {
          const {name, url} = pokemon;
          this.basePokeList.push({name, url});
        })
      },
      (error) => {
        this.errorMsg = error.message;
      }
    );
  }

  getBasePokeList() : PokemonListResponseObject[] {
    return this.basePokeList ? this.basePokeList : [];
  }
  
}
