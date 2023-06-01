import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatefoodComponent } from './updatefood.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('UpdatefoodComponent', () => {
  let component: UpdatefoodComponent;
  let fixture: ComponentFixture<UpdatefoodComponent>;
  let el: HTMLElement;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatefoodComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [
        { provide: Router, useValue: routerSpy },
       
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatefoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call updateFood method', () => {
    spyOn(component, 'updateFood');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.updateFood).toHaveBeenCalledTimes(1);
  });
});
