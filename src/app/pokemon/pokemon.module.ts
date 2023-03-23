import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonEvolutionComponent } from './pokemon-evolution/pokemon-evolution.component';
import { MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from '../app-routing.module';
import { PokemonLinkComponent } from './pokemon-link/pokemon-link.component';
import { PokemonLinkConnectorComponent } from './pokemon-link-connector/pokemon-link-connector.component';

@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonDetailComponent,
    PokemonComponent,
    PokemonEvolutionComponent,
    PokemonLinkComponent,
    PokemonLinkConnectorComponent,
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    MatCardModule,
    MatExpansionModule,
    MatTabsModule,
    MatListModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    PokemonListComponent,
    PokemonComponent
  ]
})
export class PokemonModule { }
