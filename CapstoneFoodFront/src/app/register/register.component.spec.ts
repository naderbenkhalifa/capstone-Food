import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let el: HTMLElement;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports: [ HttpClientTestingModule,ReactiveFormsModule],
      providers: [
        { provide: Router, useValue: routerSpy },
       
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call onSubmit method', () => {
    spyOn(component, 'onSubmit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(1);
  });
  it('form should be valid', () => {
    component.registerForm.controls.fullName.setValue('Ben Khalifa Nader');
    component.registerForm.controls.email.setValue('nader.benkhalifa2023@gmail.com');
    component.registerForm.controls.password.setValue('12345678');
    component.registerForm.controls.address.setValue('chebba');
    component.registerForm.controls.contactNumber.setValue('22336611');
    expect(component.registerForm.valid).toBeTruthy();
  });
  it('form should be invalid', () => {
    component.registerForm.controls.fullName.setValue('nader');
    component.registerForm.controls.email.setValue('nader');
     component.registerForm.controls.password.setValue('1234567');
    component.registerForm.controls.address.setValue('chebba');
    component.registerForm.controls.contactNumber.setValue('22336611');
    expect(component.registerForm.valid).toBeFalsy();
  });

});
