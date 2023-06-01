import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-searchfood',
  templateUrl: './searchfood.component.html',
  styleUrls: ['./searchfood.component.scss']
})
export class SearchfoodComponent implements OnInit {
  
  food:any;
  id:any
  constructor(private router:Router) { }
  
  public getFoodById(id:number){
    console.log("getFoodById: id="+id);
    this.router.navigate(['/foodFound',id]);
  }

  ngOnInit(): void {
  }
  

}
