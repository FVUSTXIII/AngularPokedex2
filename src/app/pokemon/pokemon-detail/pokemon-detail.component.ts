import { Component, Input, OnInit } from '@angular/core';
import { Ability } from '../../Models/ability.model';
import { Move } from '../../Models/move.model';
import { PokemonDetails } from '../../Models/pokemon-details.model';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  @Input() details! : PokemonDetails | null;
  @Input() hideToggle : boolean = true
  weight : number = 0;
  height : number = 0;
  abilities : Ability[] = [];
  moves : Move[] = [];
  constructor() { }

  ngOnInit(): void {}
  getWeight() : number {
    return this.details && this.details.weight ? this.details.weight : 0; 
  } 
  
  getHeight() : number {
    return this.details && this.details.height ? this.details.height : 0;
  }

  getAbilities() : Array<Ability> {
    return this.details && this.details.abilities ? this.details.abilities : [];
  }

  getMoves() : Array<Move> {
    return this.details && this.details.moves ? this.details.moves : [];
  }

}
