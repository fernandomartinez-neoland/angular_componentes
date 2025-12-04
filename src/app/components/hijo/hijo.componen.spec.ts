import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoComponen } from './hijo.componen';

describe('HijoComponen', () => {
  let component: HijoComponen;
  let fixture: ComponentFixture<HijoComponen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HijoComponen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HijoComponen);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
