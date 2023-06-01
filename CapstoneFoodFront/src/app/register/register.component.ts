import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/capstoneFood-api/src/models';
import { UsersService } from 'src/capstoneFood-api/src/services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm:any;
  user:User={};

  constructor(public  userService:UsersService, public router:Router,private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      fullName: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl("", [Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      
      address: new FormControl('', [Validators.required]),
      contactNumber: new FormControl('', [Validators.required,Validators.minLength(8)]) 

    });

    this.user = {
      fullName: '',
      email: '',
      password: '',
       address:'',
      contactNumber:'',
    };




   }

  ngOnInit(): void {
  }

  onSubmit() {
    this.user.fullName = this.registerForm.get('fullName').value;
    this.user.email = this.registerForm.get('email').value;
    this.user.password = this.registerForm.get('password').value;
    this.user.address = this.registerForm.get('address').value;
    this.user.contactNumber = this.registerForm.get('contactNumber').value;
    if (this.registerForm.valid) {
    
   

    this.userService.save(this.user).subscribe(data => {
      console.log('register succes');
   
     this.router.navigate(['/login']);
    }, error => {
      console.log('register failed');
    });
  }
    
  }

  get fullName() { return this.registerForm.get('fullName'); }
  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }
  get address () { return this.registerForm.get('address'); }
  get contactNumber () { return this.registerForm.get('contactNumber'); }


}
