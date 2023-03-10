import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonDetailComponent,
    PokemonComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatExpansionModule,
    MatTabsModule,
    MatListModule,
    MatSelectModule
  ],
  exports: [
    PokemonListComponent,
    PokemonComponent
  ]
})
export class PokemonModule { }
