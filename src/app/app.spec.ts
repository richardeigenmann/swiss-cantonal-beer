import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { CantonService } from './canton-service';

describe('App', () => {
  let mockCantonService: jasmine.SpyObj<CantonService>;

  beforeEach(async () => {
    // Create a mock of the CantonService
    mockCantonService = jasmine.createSpyObj('CantonService', ['getCantonByCode']);

    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        { provide: CantonService, useValue: mockCantonService } // Provide the mock service
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


});
