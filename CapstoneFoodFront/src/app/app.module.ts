import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFoodComponent } from './add-food/add-food.component';
import { FoodsListComponent } from './foods-list/foods-list.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { LoginsuccesComponent } from './loginsucces/loginsucces.component';
import { UpdatefoodComponent } from './updatefood/updatefood.component';
import { DeletefoodComponent } from './deletefood/deletefood.component';
import { SearchfoodComponent } from './searchfood/searchfood.component';
import { FoodfoundComponent } from './foodfound/foodfound.component';
import { CartComponent } from './cart/cart.component';
import { FoodnotfoundComponent } from './foodnotfound/foodnotfound.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentsuccessfulComponent } from './paymentsuccessful/paymentsuccessful.component';
import { SearchComponent } from './search/search.component';
import { CartStatusComponent } from './cart-status/cart-status.component';
import { RegisterComponent } from './register/register.component';






@NgModule({
  declarations: [
    AppComponent,
    AddFoodComponent,
    FoodsListComponent,
    RegistrationComponent,
    LoginComponent,
    LoginsuccesComponent,
    UpdatefoodComponent,
    DeletefoodComponent,
    SearchfoodComponent,
    FoodfoundComponent,
    CartComponent,
    FoodnotfoundComponent,
    PaymentComponent,
    PaymentsuccessfulComponent,
    SearchComponent,
    CartStatusComponent,
    RegisterComponent,
   
    
  
   
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
     ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
