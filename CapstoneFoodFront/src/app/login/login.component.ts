import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/capstoneFood-api/src/models';
import { UsersService } from 'src/capstoneFood-api/src/services';
import { CartService } from '../services/cart.service';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user:User={};
  totalPrice: any;
  totalQuantity: any;
 message:string=""
 
  email:string=""
  password:string=""
  
 

 
 
  constructor(public  userService:UsersService ,public  router: Router,private cartService: CartService,private authService:AuthService) { 
    
  }



  public  signIn(){
    this.userService.addUserLogin(this.user).subscribe(res=>{
      
      
      this.router.navigate(['/loginsucces']
      )
      
    },
      
      error => {
      
      this.message="email or password is incorrect."
      });
    
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
  onSubmit() {
    

    

    this.authService.login(this.user).subscribe(res => {
      this.router.navigate(['/loginsucces'])
    },
     
    error => {
      
      this.message=" email or password is incorrect. "
      });
    
  }
}
  


