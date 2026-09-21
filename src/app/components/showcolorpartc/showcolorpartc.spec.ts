import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Showcolorpartc } from './showcolorpartc';

describe('Showcolorpartc', () => {
  let component: Showcolorpartc;
  let fixture: ComponentFixture<Showcolorpartc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Showcolorpartc],
    }).compileComponents();

    fixture = TestBed.createComponent(Showcolorpartc);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
