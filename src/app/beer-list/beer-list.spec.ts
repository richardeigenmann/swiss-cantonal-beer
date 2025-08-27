import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BeerList } from './beer-list'; // Import the component you want to test
import { BeerService } from '../beer-service';

describe('BeerList', () => {
  let component: BeerList;
  let fixture: ComponentFixture<BeerList>;
  let mockBeerService: jasmine.SpyObj<BeerService>; // Create a mock for the service

  beforeEach(async () => {
    // Create a spy object to mock the BeerService methods
    mockBeerService = jasmine.createSpyObj('BeerService', ['getBeersByCanton']);

    await TestBed.configureTestingModule({
      imports: [BeerList], // Import the standalone component
      providers: [
        // Provide the mock service so the component can use it
        { provide: BeerService, useValue: mockBeerService }
      ]
    }).compileComponents();

    // Create the component to be tested
    fixture = TestBed.createComponent(BeerList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});