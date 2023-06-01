import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Food} from 'src/capstoneFood-api/src/models';

import { FoodserviceService } from '../services/foodservice.service';

@Component({
  selector: 'app-updatefood',
  templateUrl: './updatefood.component.html',
  styleUrls: ['./updatefood.component.scss']
})
export class UpdatefoodComponent implements OnInit {
food:Food={
  price:0,
 
};
id:any;

  constructor(private foodService:FoodserviceService,private router:Router) { }
  
  public updateFood(id:number,food:Food):void{
    this.foodService.updateFood(this.id,food).subscribe(res=>{
      this.food=res;
      this.router.navigate(['/foodsList']);
    })
  }

  ngOnInit(): void {
  }

}
