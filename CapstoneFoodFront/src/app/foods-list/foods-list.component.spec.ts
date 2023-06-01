import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodsListComponent } from './foods-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';


describe('FoodsListComponent', () => {
  let component: FoodsListComponent;
  let fixture: ComponentFixture<FoodsListComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
  const activatedRouteStub = {
    params: {
      subscribe() {
        return of();
      }
    }
  };
 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodsListComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: ActivatedRoute, useValue: activatedRouteStub }
       
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodsListComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
   
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
