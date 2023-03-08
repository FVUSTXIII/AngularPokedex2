import { Component, Input, OnInit } from '@angular/core';
import { Ability } from '../Models/ability.model';
import { Move } from '../Models/move.model';
import { PokemonDetails } from '../Models/pokemon-details.model';

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

  ngOnInit(): void {
    if (this.validateDataIntegrity()) {
      this.weight = this.details!.weight ?? 0
      this.height = this.details!.height ?? 0
      this.abilities = this.details!.abilities ?? [];
      this.moves = this.details!.moves ?? [];
    }
  }
  validateDataIntegrity() : boolean {
    if ( this.details?.abilities === null) {
      return false;
    }
    
    if (this.details?.moves === null) {
      
      return false;
    }

    if (this.details?.height === null) {
      return false ;
    }
    if (this.details?.weight === null) {
      return false;
    }
    return true;
  }


}
