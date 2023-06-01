import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchfoodComponent } from './searchfood.component';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('SearchfoodComponent', () => {
  let component: SearchfoodComponent;
  let fixture: ComponentFixture<SearchfoodComponent>;
  let el: HTMLElement;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchfoodComponent ],
      providers: [
        { provide: Router, useValue: routerSpy },
       
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call addFood method', () => {
    spyOn(component, 'getFoodById');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.getFoodById).toHaveBeenCalledTimes(1);
  });
});
