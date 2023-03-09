import { Component, Input, OnInit } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Pokemon } from '../Models/pokemon.model';
import { PokemonService } from '../Services/pokemon.service';
import {typeColors} from '../res/type-colors'

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  @Input() name! : string ;
  @Input() url ! : string ;
  pokemon$!: Observable<Pokemon>;
  mainPokeType! : string | null;
  secondPokeType!: string| null;
  pokemonError! : string;
  pokeTypesColorConstants : any = typeColors;
  constructor(private pokemonService: PokemonService) {
     
  };

  ngOnInit(): void {
      this.pokemonService.getPokemon(this.url).subscribe(
        (response) => {
          console.log(response)
          this.pokemon$ = of({
            id : response.id,
            name: this.name,
            imgSrc: response.imgSrc,
            types: response.types,
            details: response.details
          })
        },(error) => {
          this.pokemonError = `Error fetching the pokemon`;
          
        }, () => {
          console.log('finish')
          this.pokemon$.subscribe(poke => {
            this.mainPokeType = poke.types?.slice(0,1)[0]?.name ?? null;
            this.secondPokeType = poke.types?.slice(0,1)[1]?.name ?? null; 
          })
        }

        )
      
  }

}
