import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Payment, Purchase, User } from 'src/capstoneFood-api/src/models';
import { CartItem } from '../cart-item';
import { Router } from '@angular/router';
import { PurchasesService, UsersService } from 'src/capstoneFood-api/src/services';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-paymentsuccessful',
  templateUrl: './paymentsuccessful.component.html',
  styleUrls: ['./paymentsuccessful.component.scss']
})
export class PaymentsuccessfulComponent implements OnInit {
  cartItems: CartItem[]=[]
  totalPrice: number=0;
  totalQuantity: number=0;
  payment:Payment={}
  newPurchase: any;
 Address:string=""


user:User={}
loginUser:User={}
params={
  email:"",
  password:""
  
    
   
  }
  
  
   newUser:User={}
    
 

  constructor(private cartService:CartService,private router:Router,private userService:UsersService,private purchaseService :PurchasesService,private authService:AuthService) {

    this.totalPrice=this.cartService. getTotalPrice();
    this.totalQuantity=this.cartService.getTotalQuantity();
    let currentDate = new Date();
    this.payment.dateOfPayment=currentDate.toISOString();
    this.authService.user.subscribe(res=> {this.loginUser = res,
     
      this.params.email=this.loginUser.email!;
  this.params.password=this.loginUser.password!
    
      
     } );
      
  
    
      this.userService.findByEmailAndPassword(this.params).subscribe(res =>{
      this.newUser =res;
   
    })
  
  
  
   
   
   }

  ngOnInit(): void {
    this.cartItems = this.cartService.cartItems;
  }
  purchase(){
    let newPurchase:Purchase={};
  newPurchase.user=this.newUser;

     let currentDate = new Date();
    newPurchase.dateOfPurchase=currentDate.toISOString();
    newPurchase.totalcost=this.totalPrice;
    newPurchase.totalQuantity=this.totalQuantity;
    newPurchase.shippingAddress=this.Address;
   
    
    newPurchase.purchaseItems=[];
    for(let p of this.cartItems){
      let purchaseItem: any ={};
        
      
      purchaseItem.food=p;
      
    
      purchaseItem.quantity=p.quantity;
      newPurchase.purchaseItems.push(purchaseItem)
      
    }
    this.purchaseService.save(newPurchase).subscribe(res =>{
      this.newPurchase=res;
      
     
    });
    
 
    this. resetCart();
    this.router.navigate(['/cart']);


  }
  resetCart() {
    
    this.cartService.cartItems = [];
    this.cartService.totalPrice.next(0);
    this.cartService.totalQuantity.next(0);
  }
 
}   


