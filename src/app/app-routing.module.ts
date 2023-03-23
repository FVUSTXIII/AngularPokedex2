import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonEvolutionComponent } from './pokemon/pokemon-evolution/pokemon-evolution.component';
import { PokemonListComponent } from './pokemon/pokemon-list/pokemon-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/pokedex', pathMatch: 'full'},
  { path: 'pokedex', component: PokemonListComponent },
  { path: 'evolution-tree/:pokemonId', component: PokemonEvolutionComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
