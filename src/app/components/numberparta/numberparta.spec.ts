import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Numberparta } from './numberparta';

describe('Numberparta', () => {
  let component: Numberparta;
  let fixture: ComponentFixture<Numberparta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Numberparta],
    }).compileComponents();

    fixture = TestBed.createComponent(Numberparta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
