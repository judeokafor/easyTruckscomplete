import { Component, OnInit } from '@angular/core';
declare var $ : any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() {
    
   }

  ngOnInit() {
    this.jquery_code();
  }
  jquery_code(){
    $(document).ready(function(){
      //init side nav
      (<any>$('.button-collapse')).sideNav();

      //init modal
      (<any>$('.modal')).modal();
    });
    
    
  }
  
}
