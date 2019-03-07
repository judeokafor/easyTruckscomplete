import { Component, ViewChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from "../../services/user.service";
import * as Materialize from 'materialize-css';


import { Quote } from '../../models/quote';

declare var $: any;
@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.css']
})
export class QuotationComponent implements OnInit {
  quotes: Quote;

  constructor(private _router: Router) { }

  ngOnInit() {
    this.getQuoteData();
    this.jquery_code();

  }

  getQuoteData() {
    const quote = JSON.parse(localStorage.getItem('easyTruck_quote_data'));
    this.quotes = quote;
    console.log(this.quotes);
  }
  amountToKobo() {
    return this.quotes.amount * 100;
  }
  refGenerator() {
    return Math.floor((Math.random() * 1000000000) + 1)
  }
  paymentDone(response) {
    alert('success. transaction ref is ' + response.reference);
    setTimeout(() => {
      this._router.navigate(['/register']);
    }, 15000);
    this._router.navigate(['/success']);
  }
  paymentCancel() {
    localStorage.clear();
    this._router.navigate(['/']);
  }

  jquery_code() {
    $(document).ready(function () {
      //init side nav
      (<any>$('.button-collapse')).sideNav();

      //init modal
      (<any>$('.modal')).modal();

      //init scrollspy
      (<any>$('.scrollspy')).scrollSpy();

      // init parallax effect
      (<any>$('.parallax')).parallax();

      // init collapsible
      (<any>$('.collapsible')).collapsible();

      // Carousel
      (<any>$('.carousel.carousel-slider')).carousel({ fullWidth: true });
      // Next slide
      (<any>$('.carousel')).carousel('next');
      (<any>$('.carousel')).carousel('next', 3); // Move next n times.

      // Previous slide
      (<any>$('.carousel')).carousel('prev');
      (<any>$('.carousel')).carousel('prev', 4); // Move prev n times.
      // init select
      (<any>$('select')).material_select();
      // updating text fields overlapping
      Materialize.updateTextFields();
      //init text area
      (<any>$('#description')).trigger('autoresize');

      //init datepicker
      (<any>$('.datepicker')).pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 2, // Creates a dropdown of 15 years to control year,
        today: 'Today',
        clear: 'Continue',
        close: 'Ok',
        closeOnSelect: true, // Close upon selecting a date,
        container: undefined, // ex. 'body' will append picker to body
      });
      // init timepicker
      (<any>$('.timepicker')).pickatime({
        default: 'now', // Set default time: 'now', '1:30AM', '16:30'
        fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
        twelvehour: true, // Use AM/PM or 24-hour format
        donetext: 'OK', // text for done-button
        cleartext: 'Clear', // text for clear-button
        canceltext: 'Cancel', // Text for cancel-button,
        container: undefined, // ex. 'body' will append picker to body
        autoclose: true, // automatic close timepicker
        ampmclickable: true, // make AM PM clickable
        aftershow: function () { } //Function for after opening timepicker
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

