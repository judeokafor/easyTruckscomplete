import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';

import { User } from "../../models/user";
import { Quote } from '../../models/quote';

// let currentClass = 'success';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({
    firstName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    phone: new FormControl(null, [Validators.required, Validators.minLength(11), Validators.maxLength(11)]),
    password: new FormControl(null, [Validators.required]),
    cnfPassword: new FormControl(null, [Validators.required]),
  });
  //bring in a user object from the database.... lets assume its a user object
  user: User;
  quotes: Quote;
  error: any = {
    show: false,
    msg: '',
  };
  disable: Boolean = false;
  constructor(
    private _router: Router,
    private _userService: UserService,
  ) { }
  
  ngOnInit() {
    this.getQuoteData();
  }
  getQuoteData() {
    const quote = JSON.parse(localStorage.getItem('easyTruck_quote_data'));
    this.quotes = quote;
    console.log(this.quotes);
  }
  register() {
    if (this.registerForm.controls.password.value != this.registerForm.controls.cnfPassword.value) {
      console.log('invalid password');
      this.disable = true;
          this.error.show = true;
          this.error.msg = 'Password does not match';
          setTimeout(() => {
            this.disable = false
            this.error.show = false;
            this.error.msg = '';
            this._router.navigate(['/register']);
          }, 3000);
    }

    this._userService.registerUser(this.registerForm.value)
      .subscribe(
        res => {
          this.disable = true
          console.log(res);
          this.error.show = true;
          this.error.msg = 'You are now registered';
          setTimeout(() => {
            this.disable = false
            this.error.show = false;
            this.error.msg = '';
            this._router.navigate(['/login']);
          }, 3000);
        },
        error => {
          console.error(error)
        })
  }
  get password() {
    return this.registerForm.get('password');
  }
  get cnfPassword() {
    return this.registerForm.get('cnfPassword');
  }
  get lastName() {
    return this.registerForm.get('lastName');
  }
}
