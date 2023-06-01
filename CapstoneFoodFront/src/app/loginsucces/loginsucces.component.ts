import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { User } from 'src/capstoneFood-api/src/models';
import { UsersService } from 'src/capstoneFood-api/src/services';
import { AuthService } from '../auth.service';





@Component({
  selector: 'app-loginsucces',
  templateUrl: './loginsucces.component.html',
  styleUrls: ['./loginsucces.component.scss']
})
export class LoginsuccesComponent implements OnInit {
  totalPrice: number=0;
  totalQuantity: number=0;
 user:User={}
 loginUser: User={};

 params={
email:"",
password:""

  
 
}


 newUser:User={}
  

  constructor(private cartService: CartService,private router:Router,private authService:AuthService,private userService:UsersService) {
 
    this.authService.user.subscribe(res=> {this.loginUser = res,
     
      this.params.email=this.loginUser.email!;
  this.params.password=this.loginUser.password! 
    
      
     } );
      
  
    
      this.userService.findByEmailAndPassword(this.params).subscribe(res =>{
      this.newUser =res;
   
    })
    
 

   
   
   }
  

  ngOnInit(): void {
    this.cartService.totalPrice.subscribe(
      data => this.totalPrice = data
    );

   
    this.cartService.totalQuantity.subscribe( 
      data => this.totalQuantity = data
    );

   
    this.cartService.computeCartTotals();
    
    
    
      
  }

  
  logout(){
    this.router.navigate(['/login']);
    this.cartService.resetCart();
  }


  }
  
  

  


