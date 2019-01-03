import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private _router : Router,
    private _userService : UserService,
  ) { }

  ngOnInit() {
  }
  logout(){
    this._userService.logout()
    .subscribe(
      data=>{
        console.log(data);
        this._router.navigate(['/login'])
      },
      error=>console.error(error)
    )
  }
}
