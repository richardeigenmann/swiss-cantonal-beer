import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerService } from './beer-list';

describe('BeerList', () => {
  let component: BeerService;
  let fixture: ComponentFixture<BeerService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeerService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeerService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
