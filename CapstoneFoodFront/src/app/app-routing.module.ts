import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFoodComponent } from './add-food/add-food.component';
import { CartComponent } from './cart/cart.component';
import { DeletefoodComponent } from './deletefood/deletefood.component';
import { FoodfoundComponent } from './foodfound/foodfound.component';
import { FoodnotfoundComponent } from './foodnotfound/foodnotfound.component';
import { FoodsListComponent } from './foods-list/foods-list.component';
import { LoginComponent } from './login/login.component';
import { LoginsuccesComponent } from './loginsucces/loginsucces.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentsuccessfulComponent } from './paymentsuccessful/paymentsuccessful.component';
import { RegistrationComponent } from './registration/registration.component';
import { SearchfoodComponent } from './searchfood/searchfood.component';
import { UpdatefoodComponent } from './updatefood/updatefood.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'addFood', component:AddFoodComponent},
  {path:'updateFood', component:UpdatefoodComponent},
  {path:'deleteFood', component:DeletefoodComponent},
  {path:'searchFood', component:SearchfoodComponent},
  {path:'foodsList', component:FoodsListComponent},
  {path:'login', component:LoginComponent},
  {path:'registration', component:RegistrationComponent},
  {path:'loginsucces', component:LoginsuccesComponent},
  {path:'foodFound/:idFood', component:FoodfoundComponent},
  {path:'foodnotFound/:idFood', component:FoodfoundComponent},
  {path:'cart', component:CartComponent},
  {path:'foodnotfound', component:FoodnotfoundComponent},
  {path:'payment', component:PaymentComponent},
  {path:'paymentsuccessful', component:PaymentsuccessfulComponent},
  {path: 'search/:keyword', component: FoodsListComponent},
  {path:'register', component:RegisterComponent}

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
