import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { PokemonListResponse, PokemonListResponseObject } from '../Models/pokemon-list-response.model';
import { PokemonListService } from '../Services/pokemon-list-service.service';

import { PokemonListComponent } from './pokemon-list.component';

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
const pokemonListServiceMock = jasmine.createSpyObj({
  getPokemonList : of(pokemonListMockedInfo)
});
describe('PokemonListComponent', () => {
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;
  let pokemonListService : jasmine.SpyObj<PokemonListService>;

  beforeEach(async () => {
    pokemonListService = jasmine.createSpyObj('PokemonListService', ['getPokemonList']);

    await TestBed.configureTestingModule({
      declarations: [ PokemonListComponent ],
      imports: [HttpClientModule ],
      providers: [ { provide: PokemonListService, useValue: pokemonListServiceMock } ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListComponent);
    component = fixture.componentInstance;
    
    fixture.detectChanges();
   
    
  });
  it('should init', () => {
    expect(component).toBeTruthy();
  });

  it('should populate array upon initialization (happy path)', () => {
    component.ngOnInit();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.basePokeList.length).toBeGreaterThan(0);
    });
  });

  it('should populate array upon initialization (sad path)', () => {
    pokemonListServiceMock.getPokemonList.and.callFake(() => {
      return throwError({
        message: 'An error happened'
      });
    });
    component.ngOnInit();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.errorMsg).toBeTruthy();
    });
  }); 
});
