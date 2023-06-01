import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletefoodComponent } from './deletefood.component';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';

describe('DeletefoodComponent', () => {
  let component: DeletefoodComponent;
  let fixture: ComponentFixture<DeletefoodComponent>;
  let el: HTMLElement;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletefoodComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [
        { provide: Router, useValue: routerSpy },
       
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletefoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call deleteFood method', () => {
    spyOn(component, 'deleteFood');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.deleteFood).toHaveBeenCalledTimes(1);
  });
});
