import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { User } from 'src/capstoneFood-api/src/models';
import { UsersService } from 'src/capstoneFood-api/src/services';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  user:User={};

  constructor(public  userService:UsersService, public router:Router) { }
  
  public  register(){
    this.userService.save(this.user).subscribe(res=>{
      this.user=res;
     this.router.navigate(['/login']);
     
      
    })
  }


  ngOnInit(): void {
  }

}
