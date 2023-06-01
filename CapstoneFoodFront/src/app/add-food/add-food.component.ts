import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Food } from 'src/capstoneFood-api/src/models';
import { FoodsService } from 'src/capstoneFood-api/src/services';







@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.scss']
  
})
export class AddFoodComponent implements OnInit {
   food:Food ={
     price:0,
    
   };
 
    

  

  constructor(private foodService:FoodsService,private router:Router) { 
    
  }
  public  addFood(){
    this.foodService.save(this.food).subscribe(res=>{
      this.food=res;
      this.router.navigate(['/foodsList']);

     
      
    })
  }

  ngOnInit(): void {
  }

}
