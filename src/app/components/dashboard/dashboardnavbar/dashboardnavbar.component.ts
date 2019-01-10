import { Component, OnInit } from '@angular/core';
declare var $ : any;

@Component({
  selector: 'app-dashboardnavbar',
  templateUrl: './dashboardnavbar.component.html',
  styleUrls: ['./dashboardnavbar.component.css']
})
export class DashboardnavbarComponent implements OnInit {

  constructor() { }

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
