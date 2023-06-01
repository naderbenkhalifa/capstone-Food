import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  Payment } from 'src/capstoneFood-api/src/models';
import { CartItem } from '../cart-item';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  payment:Payment={};
  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;
  user:any

  newPurchase: any;

  constructor(private cartService: CartService,private router :Router) { 
   
  }


  ngOnInit(): void {
    this.listCartDetails();
  }
  listCartDetails() {

   
    this.cartItems = this.cartService.cartItems;

  
    this.cartService.totalPrice.subscribe(
      data => this.totalPrice = data
    );

  
    this.cartService.totalQuantity.subscribe( 
      data => this.totalQuantity = data
    );

    
    this.cartService.computeCartTotals();
  }

  incrementQuantity(theCartItem: CartItem) {
    this.cartService.addToCart(theCartItem);
  }

  decrementQuantity(theCartItem: CartItem) {
    this.cartService.decrementQuantity(theCartItem);
  }

  remove(theCartItem: CartItem) {
    this.cartService.remove(theCartItem);
  }

 
      
  resetCart(){
    this.cartService.resetCart();
    this.listCartDetails();
  }
  checkout(){
    this.router.navigate(['/payment'])
  }
  
}

