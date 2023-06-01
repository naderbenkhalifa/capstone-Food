import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Purchase } from 'src/capstoneFood-api/src/models';

@Injectable({
  providedIn: 'root'
})
export class PurchaseServiceService {

  constructor(private http:HttpClient) { }
  
  public save(purchase:Purchase):Observable<Purchase>{
    return this.http.post<Purchase>("http://localhost:8020//CapstoneFood/purchases/create",purchase);
  }

}
