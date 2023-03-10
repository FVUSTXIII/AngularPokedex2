import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable, of, throwError } from 'rxjs';

import { PokemonComponent } from './pokemon.component';
import { PokemonService } from 'src/app/Services/pokemon.service';
import { Pokemon } from 'src/app/Models/pokemon.model';

describe('PokemonComponent', () => {
  let component: PokemonComponent;
  let fixture: ComponentFixture<PokemonComponent>;
  let pokemonService: PokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ PokemonComponent ],
      providers: [PokemonService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonComponent);
    component = fixture.componentInstance;
    pokemonService = TestBed.inject(PokemonService);
    fixture.detectChanges();
  });


    it('should retrieve pokemon data successfully (happy path)' , () => {
    const mockPokemon$: Observable<Pokemon> = of({
      id: 1,
      name: 'Bulbasaur',
      imgSrc: 'https://pokeapi.co/api/v2/pokemon/1.png',
      types: [{name: 'Grass'}, {name: 'Poison'}],
      details: {
        height: 7,
        weight: 69,
        abilities: [{name: 'Chlorophyll', url: 'https://pokeapi.co/api/v2/ability/34/'}, {name: 'Overgrow', url: 'https://pokeapi.co/api/v2/ability/65/'}],
        moves: [{name: 'Petal Dance', url: 'https://pokeapi.co/api/v2/move/80/'}, {name: 'Sludge', url: 'https://pokeapi.co/api/v2/move/124/'}]
      }
    });  
    const spyPokemon = spyOn(pokemonService, 'getPokemon');
      spyPokemon.and.returnValue(mockPokemon$);
      component.ngOnInit();
      expect(pokemonService.getPokemon).toHaveBeenCalled();
    });

    it('should retrieve pokemon data successfully (sad path)', () => {
      const spyPokemon = spyOn(pokemonService, 'getPokemon');
      spyPokemon.and.callFake(() => {
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

    it('should fill types on done stage (happy path)', () => {
      const mockPokemon$: Observable<Pokemon> = of({
        id: 1,
        name: 'Bulbasaur',
        imgSrc: 'https://pokeapi.co/api/v2/pokemon/1.png',
        types: [{name: 'Grass'}, {name: 'Poison'}],
        details: {
          height: 7,
          weight: 69,
          abilities: [{name: 'Chlorophyll', url: 'https://pokeapi.co/api/v2/ability/34/'}, {name: 'Overgrow', url: 'https://pokeapi.co/api/v2/ability/65/'}],
          moves: [{name: 'Petal Dance', url: 'https://pokeapi.co/api/v2/move/80/'}, {name: 'Sludge', url: 'https://pokeapi.co/api/v2/move/124/'}]
        }
      });  
      const spyPokemon = spyOn(pokemonService, 'getPokemon');
        spyPokemon.and.returnValue(mockPokemon$);
        component.ngOnInit();
        fixture.whenStable().then(() => {
          let arrayTypeLength : number = 0;
          component.pokemon$.subscribe((pokemon) => {
            arrayTypeLength = pokemon.types?.length ?? 0;
          })
          expect(arrayTypeLength).toBeGreaterThan(0);
        });
    });

    it('should fill types on done stage (sad path)', () => {
      const spyPokemon = spyOn(pokemonService, 'getPokemon');
      spyPokemon.and.callFake(() => {
        return throwError({
          message: 'An error happened'
        });
      });
      component.ngOnInit();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        let arrayTypeLength : number = 0;
          component.pokemon$.subscribe((pokemon) => {
            arrayTypeLength = pokemon.types?.length ?? 0;
          })
        expect(arrayTypeLength).toEqual(0);
      });
    })
  
  });
