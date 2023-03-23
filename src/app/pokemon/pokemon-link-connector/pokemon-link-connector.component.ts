import { Component, Input, OnInit } from '@angular/core';
import { LinkTypes } from 'src/app/Models/link-types-enums.model';
import { Species } from 'src/app/Models/pokemon-link.model';
import { EvolutionChainService } from 'src/app/Services/evolution-chain.service';

@Component({
  selector: 'app-pokemon-link-connector',
  templateUrl: './pokemon-link-connector.component.html',
  styleUrls: ['./pokemon-link-connector.component.css']
})
export class PokemonLinkConnectorComponent implements OnInit {

  @Input() link! : Species | null;
  @Input() linkType! : LinkTypes;
  
  ConnectorId! : number;
  constructor(private evolutionChainService : EvolutionChainService) { }

  ngOnInit(): void {
    this.getPokemonId();
  }

  getPokemonId() : void {
    const url : string = (this.link?.url) ? (this.link?.url) : '';
    this.evolutionChainService.getIdFromEvoChain(url).subscribe((res) => {
      console.log(res);
    });
  }

}
