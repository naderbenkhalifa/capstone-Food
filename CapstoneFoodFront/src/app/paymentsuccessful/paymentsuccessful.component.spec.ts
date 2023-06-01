import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsuccessfulComponent } from './paymentsuccessful.component';
import { Router } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';

describe('PaymentsuccessfulComponent', () => {
  let component: PaymentsuccessfulComponent;
  let fixture: ComponentFixture<PaymentsuccessfulComponent>;
  let el: HTMLElement;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentsuccessfulComponent ],
      providers: [
        { provide: Router, useValue: routerSpy },
       
      ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call purchase method', () => {
    spyOn(component, 'purchase');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.purchase).toHaveBeenCalledTimes(1);
  });
});
