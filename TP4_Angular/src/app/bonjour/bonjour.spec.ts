import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bonjour } from './bonjour';

describe('Bonjour', () => {
  let component: Bonjour;
  let fixture: ComponentFixture<Bonjour>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bonjour]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bonjour);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
