import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AddFoodComponent } from './add-food.component';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';

describe('AddFoodComponent', () => {
  let component: AddFoodComponent;
  let fixture: ComponentFixture<AddFoodComponent>;
  let el: HTMLElement;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFoodComponent ],
      providers: [
        { provide: Router, useValue: routerSpy },
       
      ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call addFood method', () => {
    spyOn(component, 'addFood');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.addFood).toHaveBeenCalledTimes(1);
  });
});

