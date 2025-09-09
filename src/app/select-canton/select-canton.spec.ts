import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCanton } from './select-canton';

describe('SelectCanton', () => {
  let component: SelectCanton;
  let fixture: ComponentFixture<SelectCanton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectCanton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectCanton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
