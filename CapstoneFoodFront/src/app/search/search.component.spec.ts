import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SearchComponent } from './search.component';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
  let el: HTMLElement;
  const activatedRouteStub = {
    params: {
      subscribe() {
        return of();
      }
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      providers: [
        { provide: Router, useValue: routerSpy },
       
          { provide: ActivatedRoute, useValue: activatedRouteStub }
        
          
      ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call doSearch method', () => {
    spyOn(component, 'doSearch');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.doSearch).toHaveBeenCalledTimes(1);
  });
});
