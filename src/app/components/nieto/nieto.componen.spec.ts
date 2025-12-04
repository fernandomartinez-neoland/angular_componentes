import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NietoComponen } from './nieto.componen';

describe('NietoComponen', () => {
  let component: NietoComponen;
  let fixture: ComponentFixture<NietoComponen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NietoComponen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NietoComponen);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
