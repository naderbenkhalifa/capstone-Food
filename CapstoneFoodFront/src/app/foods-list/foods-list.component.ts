import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food} from 'src/capstoneFood-api/src/models';
import { FoodsService } from 'src/capstoneFood-api/src/services';
import { CartItem } from '../cart-item';
import { CartService } from '../services/cart.service';
import { FoodserviceService } from '../services/foodservice.service';


@Component({
  selector: 'app-foods-list',
  templateUrl: './foods-list.component.html',
  styleUrls: ['./foods-list.component.scss']
})
export class FoodsListComponent implements OnInit {
  foods:Food[]=[]
  public food:Food={
    price:0,

  };
 
  searchMode: boolean = false;

   constructor(private foodService: FoodsService,private cartService :CartService,private route :Router,private service:FoodserviceService, private router: ActivatedRoute) { }


  ngOnInit(){
    this.router.paramMap.subscribe(() => {
      this.listFoods();
    });
    
  }
  addToCart(food: Food) {
    
    console.log(`Adding to cart: ${food.name}, ${food.price}`);

    // TODO ... do the real work
    const theCartItem = new CartItem(food);

    this.cartService.addToCart(theCartItem);
  }
  handleSearchFoods() {

    const theKeyword: string = this.router.snapshot.paramMap.get('keyword')!;

   
    this.service.searchFoods(theKeyword).subscribe(
      data => {
        this.foods = data;
      }
    )
  }
  handleListFoods(){

    this.foodService.findAll().subscribe(res => { this.foods= res; });
 }
 listFoods() {

  this.searchMode = this.router.snapshot.paramMap.has('keyword');

  if (this.searchMode) {
    this.handleSearchFoods();
  }
  else {
    this. handleListFoods();
  }

}


 


}
