import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginsuccesComponent } from './loginsucces.component';
import { Router } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';

describe('LoginsuccesComponent', () => {
  let component: LoginsuccesComponent;
  let fixture: ComponentFixture<LoginsuccesComponent>;
  let el: HTMLElement;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginsuccesComponent ],
      providers: [
        { provide: Router, useValue: routerSpy },
       
      ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginsuccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call logout method', () => {
    spyOn(component, 'logout');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.logout).toHaveBeenCalledTimes(1);
  });
});
