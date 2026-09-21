import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Rgbpartb } from './rgbpartb';

describe('Rgbpartb', () => {
  let component: Rgbpartb;
  let fixture: ComponentFixture<Rgbpartb>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rgbpartb],
    }).compileComponents();

    fixture = TestBed.createComponent(Rgbpartb);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
