import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodfoundComponent } from './foodfound.component';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';






describe('FoodfoundComponent', () => {
  let component: FoodfoundComponent;
  let fixture: ComponentFixture<FoodfoundComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
 
const activatedRouteSpy = {
    snapshot: {
      params:({
     
        id:'123'
      })
    }
  };

 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodfoundComponent ],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: ActivatedRoute, useValue: activatedRouteSpy }
       
       
      ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodfoundComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
   
   
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
