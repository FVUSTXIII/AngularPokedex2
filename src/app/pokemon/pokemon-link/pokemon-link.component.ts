import { Component, OnInit, Input } from '@angular/core';
import { PokemonLink, Species } from 'src/app/Models/pokemon-link.model';
import { LinkTypes } from 'src/app/Models/link-types-enums.model'
import { PokemonService } from 'src/app/Services/pokemon.service';
import { EvolutionChainService } from 'src/app/Services/evolution-chain.service';
import { Observable, of } from 'rxjs';
import { EvolutionSpeciesResponse } from 'src/app/Models/evolution-chain-response.model';
import { Pokemon } from 'src/app/Models/pokemon.model';

@Component({
  selector: 'app-pokemon-link',
  templateUrl: './pokemon-link.component.html',
  styleUrls: ['./pokemon-link.component.css']
})
export class PokemonLinkComponent implements OnInit {
  @Input() id! : number;
  @Input() linkType! :  LinkTypes;
  evolutionTreeURL : string = '';
  linkInfo! : PokemonLink | null;
  pokeImgSrc! : string | null;
  hasNext : Boolean = false;
  hasPrior : Boolean = false;
  prior! : Species | null;
  next! : Species | null;
  dynamicUrl : string = 'https://pokeapi.co/api/v2/pokemon';
  mainEvoLinkResponse$! : Observable<EvolutionSpeciesResponse | null>;
  constructor(private pokeService : PokemonService, private evolutionChainService : EvolutionChainService) { }

  ngOnInit(): void {
    
    this.getPokeLink().subscribe((a) => {
      console.log(a)
      this.mainEvoLinkResponse$ = of({
        name: (a?.name) ? (a?.name) : '',
        evolution_chain : (a?.evolution_chain) ? (a?.evolution_chain) : '',
        evolves_from_species : (a?.evolves_from_species) ? (a?.evolves_from_species) : null
      });
      this.prior = (a?.evolves_from_species) ? (a?.evolves_from_species) : null;
      this.evolutionTreeURL = (a?.evolution_chain) ? (a?.evolution_chain) : '';
      
    }, (error) => {

    }, () => {
      
      this.mainEvoLinkResponse$.subscribe((a) => {
        
        const name = (a?.name) ? a?.name : '';
        this.getEvoChainInfo().subscribe((a) => {
          console.log( "??" , a)
            this.next = (a) ? (a) : null;
            this.linkInfo = {
              id: this.id,
              name: name,
              linkType: this.linkType
            };
        this.dynamicUrl+= '/'+this.linkInfo?.name
        this.linkTypeVerification();
        this.retrieveImg().subscribe((a) => {
          this.pokeImgSrc = a.imgSrc;
          console.log( this.next, " es el next")
          console.log(this.prior, " es el prior")
          });   
        });
     });
    });
    
  }

  getPokeLink() : Observable<EvolutionSpeciesResponse | null> {
    return this.evolutionChainService.getEvoSpeciesInfo(this.id.toString())      
  }
  
  getEvoChainInfo() : Observable<Species | null> {
    return this.evolutionChainService.getInfoFromEvoChain(this.evolutionTreeURL);
  }

  linkTypeVerification() : void {
    console.log("estmos en un link tipo ", this.linkType)
    if (this.linkType === LinkTypes.main) {
      this.hasNext = (this.next) ? true : false;
      this.hasPrior = (this.prior) ? true : false;
    } else if (this.linkType === LinkTypes.prior) {
      this.hasNext = false;
      this.hasPrior = (this.prior) ? true : false;
    } else if (this.linkType === LinkTypes.next){
      this.hasNext = (this.next) ? true : false;
      this.hasPrior = false;
    } else {
      console.log("LinkType error: ", this.linkType);
    }
    console.log("este link tiene: \nPrior: " , this.hasPrior , " \nNext: ", this.hasNext);
  }

  getPrior() : Species | null {
    return this.prior;
  }

  getNext() : Species | null {
    return this.next
  }

  retrieveImg() : Observable<Pokemon> {
    return this.pokeService.getPokemon(this.dynamicUrl)
  }

  getImg() : string | null {
    console.log(this.pokeImgSrc)
    return this.pokeImgSrc;
  }
  
}
