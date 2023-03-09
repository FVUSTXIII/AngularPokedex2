import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonDetailComponent } from './pokemon-detail.component';

describe('PokemonDetailComponent', () => {
  let component: PokemonDetailComponent;
  let fixture: ComponentFixture<PokemonDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render Pokemon details correctly (happy path)', () => {
    component.ngOnInit();
    component.details = {
      weight: 100,
      height: 5,
      abilities: [{ name: 'ability1',  url: 'url1' }, { name: 'ability2', url: 'url2' }],
      moves: [{ name: 'move1', url: 'url1' }, { name: 'move2', url: 'url2' }]
    };
    fixture.whenRenderingDone().then((value) => {
      fixture.detectChanges();
      const element = fixture.nativeElement;
      expect(element.querySelector('.basic-info-section mat-list-item:nth-child(1) span.mat-list-item-line').textContent).toContain('100');
      expect(element.querySelector('.basic-info-section mat-list-item:nth-child(2) span.mat-list-item-line').textContent).toContain('5');
      expect(element.querySelectorAll('.abilities-and-moves mat-list-item').length).toBe(2);
      expect(element.querySelectorAll('.abilities-and-moves mat-form-field mat-option').length).toBe(2);
    });
    
  });

  it('should render Pokemon details correctly (sad path)', () => {
    component.details = null;
    fixture.whenRenderingDone().then((value) => {
      fixture.detectChanges();
      const element = fixture.nativeElement;
      expect(element.querySelector('.basic-info-section mat-list-item:nth-child(1) span.mat-list-item-line')).toBeNull();
      expect(element.querySelector('.basic-info-section mat-list-item:nth-child(2) span.mat-list-item-line')).toBeNull();
      expect(element.querySelectorAll('.abilities-and-moves mat-tab-label').length).toBe(0);
      expect(element.querySelectorAll('.abilities-and-moves mat-list-item').length).toBe(0);
      expect(element.querySelectorAll('.abilities-and-moves mat-form-field mat-option').length).toBe(0);
    });
  });
})