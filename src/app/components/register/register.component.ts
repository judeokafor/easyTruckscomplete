import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup = new FormGroup({
    firstName : new FormControl (null, [Validators.required, Validators.minLength(3)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    phone: new FormControl (null, [Validators.required, Validators.minLength(11)]),
    password: new FormControl (null, [Validators.required]),
    cnfPassword: new FormControl(null, [Validators.required]),
  });
  //bring in a user object from the database.... lets assume its a user object
  user: any = {};
  constructor(
    private _router : Router,
    private _userService : UserService,
  ) { }

  ngOnInit() {
    
  }
  // register() {
  //   console.log(this.registerForm);
  //   // console.log('the final form value is', this.user);
  // }
  register(){
    if(!this.registerForm.valid || (this.registerForm.controls.password.value != this.registerForm.controls.cnfPassword.value)){
      console.log('Invalid Form'); return;
    }

    this._userService.register(JSON.stringify(this.registerForm.value))
    .subscribe(
      data=> {console.log(data);
        this._router.navigate(['/login']);},
      error=>console.error(error)
    )
    
  }

 }
