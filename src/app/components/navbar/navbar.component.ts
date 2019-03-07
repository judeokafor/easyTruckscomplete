import { Component, OnInit } from '@angular/core';
import * as Materialize from 'materialize-css';
declare var $: any;

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
  jquery_code() {
    $(document).ready(function () {
      //init side nav
      (<any>$('.button-collapse')).sideNav();

      //init modal
      (<any>$('.modal')).modal();

      //init scrollspy
      (<any>$('.scrollspy')).scrollSpy();

      // Carousel
      (<any>$('.carousel.carousel-slider')).carousel({ fullWidth: true });
      // init select
      (<any>$('select')).material_select();
      //init Material box
      (<any>$('.slider')).slider({
        indicators: false,
        height: 200,
        fullwidth:250
      });

      // Scrollfire and Navbar Changes
      const options = [
        {
          selector: ".main-text", offset: 0, callback: function (el) {
            Materialize.fadeInImage($(el))
          }
        },
        {
          selector: ".navbar-fixed", offset: 1000, callback: function () {
            $('nav').removeClass('blue-grey darken-3');
            $('nav').addClass('blue-grey darken-1');
          }
        }
      ];

      Materialize.scrollFire(options);

    });


  }

}
