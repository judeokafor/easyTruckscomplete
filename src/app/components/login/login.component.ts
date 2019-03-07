import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';

import { User } from "../../models/user";
import { Quote } from '../../models/quote';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  quotes: Quote;
  error: any = {
    show: false,
    msg: '',
  };
  disable: Boolean = false;

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.required])
  });
  constructor(
    private _router: Router,
    private _userService: UserService, ) { }

  ngOnInit() {
    this.getQuoteData();
  }
  getQuoteData() {
    const quote = JSON.parse(localStorage.getItem('easyTruck_quote_data'));
    this.quotes = quote;
    console.log(this.quotes);
  }
  login() {
    if (!this.loginForm.valid) {
      console.log('Invalid');
      return;
    }
    else {
      this._userService.login(this.loginForm.value)
        .subscribe(
          data => {
            this.disable = true
            console.log(data);
            this.error.show = true;
            this.error.msg = 'Login Successful';
            setTimeout(() => {
              this.disable = false
              this.error.show = false;
              this.error.msg = '';
              this._router.navigate(['/dashboard']);
              // this.dashboardNavigate();
            }, 3000);
          },
          error => {
            console.error(error)
          }
        );
    }
  }
  
  get email() {
    return this.loginForm.get('email');
  }
}
