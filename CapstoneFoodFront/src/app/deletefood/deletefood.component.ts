import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Food } from 'src/capstoneFood-api/src/models';
import { FoodsService } from 'src/capstoneFood-api/src/services';

@Component({
  selector: 'app-deletefood',
  templateUrl: './deletefood.component.html',
  styleUrls: ['./deletefood.component.scss']
})
export class DeletefoodComponent implements OnInit {
  public food:Food={
    price:0,
    
 } 
 id:any
 

  constructor(private foodService:FoodsService,private router:Router) { }
  public deleteFood(id:number):void{
    this.foodService.delete(id).subscribe(res=>{
     this.router.navigate(['/foodsList']);
    },
     error=>{
      this.router.navigate(['/foodnotfound']);
     

    });
  }

  ngOnInit(): void {

  }

}
