import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from 'src/capstoneFood-api/src/models';

@Injectable({
  providedIn: 'root'
})
export class FoodserviceService {
  private baseUrl = 'http://localhost:8020//CapstoneFood/foods'
  url: string;
   id:number=1;
 
  constructor(private http:HttpClient) {this.url="http://localhost:8020//CapstoneFood/foods/create"; }
  


public addFood(food:Food):Observable<Food>{
  return this.http.post<Food>("http://localhost:8020//CapstoneFood/foods/create",food);
}
public getAllFoods():Observable<Food[]>{
  return this.http.get<Food[]>("http://localhost:8020//CapstoneFood/foods/all");
}
public updateFood(id:number,food:Food):Observable<Food>{
  return this.http.put<Food>("http://localhost:8020//CapstoneFood/foods/update/"+id,food);
}

searchFoods(theKeyword: string): Observable<Food[]> {


  const searchUrl = `${this.baseUrl}/findByNameContaining/${theKeyword}`;



  return this.getFoods(searchUrl);
}

private getFoods(searchUrl: string): Observable<Food[]> {
  return this.http.get<Food[]>(searchUrl);
}



}
