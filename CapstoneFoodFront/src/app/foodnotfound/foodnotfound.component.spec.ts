import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodnotfoundComponent } from './foodnotfound.component';

describe('FoodnotfoundComponent', () => {
  let component: FoodnotfoundComponent;
  let fixture: ComponentFixture<FoodnotfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodnotfoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodnotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
