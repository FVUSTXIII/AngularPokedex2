import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonLinkConnectorComponent } from './pokemon-link-connector.component';

describe('PokemonLinkConnectorComponent', () => {
  let component: PokemonLinkConnectorComponent;
  let fixture: ComponentFixture<PokemonLinkConnectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonLinkConnectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonLinkConnectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
