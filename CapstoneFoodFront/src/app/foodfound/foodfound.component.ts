import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FoodsService } from 'src/capstoneFood-api/src/services';

@Component({
  selector: 'app-foodfound',
  templateUrl: './foodfound.component.html',
  styleUrls: ['./foodfound.component.scss']
})
export class FoodfoundComponent implements OnInit {

   food:any;
   id: number=1;

constructor(private foodService: FoodsService,private route: ActivatedRoute,private rout :Router) { }

 ngOnInit(): void {
    this.id=this.route.snapshot.params.idFood;
    console.log("FoodFoundComponent:ngOnInit: id="+this.id);
    if(this.id!=null){
    this.foodService.findById(this.id).subscribe(res=>{
      this.food=res;
    },
   error=>{
    
      this.rout.navigate(['/foodnotfound']);

   });
  }
}

}
