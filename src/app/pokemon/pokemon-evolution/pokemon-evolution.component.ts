import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LinkTypes } from 'src/app/Models/link-types-enums.model'

@Component({
  selector: 'app-pokemon-evolution',
  templateUrl: './pokemon-evolution.component.html',
  styleUrls: ['./pokemon-evolution.component.css']
})
export class PokemonEvolutionComponent implements OnInit {
  id! : number;
  mainLink : LinkTypes = LinkTypes.main;
  
  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((event) => {
      this.id = event['pokemonId'];
    });
  }




  }


