import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/capstoneFood-api/src/models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 

 
  private userSubject!: BehaviorSubject<User>;
  public user!: Observable<User>;

 
  constructor(private http: HttpClient) {
    this.userSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser')!)
    );
    this.user = this.userSubject.asObservable();
  }
   
   

  login(user:any): Observable<any> {
    return this.http.post<any>("http://localhost:8020/CapstoneFood//users/login/create", user)
      .pipe(map(userInfo => {
        localStorage.setItem('currentUser', JSON.stringify(user));
          this.userSubject.next(user);
          return user;
        
      }))
  }
 
  public get userValue(): User {
    return this.userSubject.value;
  }
 
}
