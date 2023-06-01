import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Payment } from 'src/capstoneFood-api/src/models';
import { PaymentsService } from 'src/capstoneFood-api/src/services';
import { CartItem } from '../cart-item';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
 payment:Payment={};
  totalPrice:number=0;
  totalAmount:number=0;
  totalQuantity=0
  cartItems: CartItem[]=[]
  constructor(public cartService:CartService,public paymentService: PaymentsService ,private router:Router ) {
  
    

    this.totalPrice=this.cartService. getTotalPrice();
    let currentDate = new Date();
    this.payment.dateOfPayment=currentDate.toISOString();
    this.payment.totalAmount=this.totalPrice;
      
  }
  
 


  ngOnInit(): void {
    this.listCartDetails();
  
  }


  public  pay(){
    this.paymentService.save(this.payment).subscribe(res=>{
    this.payment=res;
    this.router.navigate(['/paymentsuccessful']);
  

    })
  }

  cancel(){
    this.router.navigate(['/cart']);

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

   
  
  
}


 

