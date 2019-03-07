import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
import { UserService } from "../../services/user.service";


import * as Materialize from 'materialize-css';
import { Quote } from '../../models/quote';
declare var $: any;

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
quotes: Quote[];

  quoteForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    firstName: new FormControl(null, Validators.required),
    phone: new FormControl(null, [Validators.required, Validators.minLength(11), Validators.maxLength(11)]),
    pickUpLocation: new FormControl(null, Validators.required),
    dropOffLocation: new FormControl(null, Validators.required),
    pickUpDate: new FormControl(null, Validators.required),
    pickUpTime: new FormControl(null, Validators.required),
    description: new FormControl(null, [Validators.minLength(10)]),
    truckSelection: new FormControl(null, Validators.required),
    packaging: new FormControl(null, Validators.required),
  })
  error: any = {
    show: false,
    msg: '',
  };
  disable: boolean = false;
  constructor(
    // private _fb :  FormBuilder,
    private _router: Router,
    private _userService: UserService,
    private _flashMessages: FlashMessagesService,
  ) { }

  ngOnInit() {

    this.jquery_code();

  }
  getQuote() {
    const el = document.querySelectorAll('.mydate');
    const time = document.querySelectorAll('.mytime');
    this.quoteForm.value.pickUpDate = new Date(el["0"].valueAsDate).toISOString();
    this.quoteForm.value.pickUpTime = new Date(time["0"].valueAsDate).toISOString();
    if (!this.quoteForm.valid) {
      return console.log('Invalid Form');
    }
    else {
      this._userService.addQuote(this.quoteForm.value)
        .subscribe(
          data => {
            console.log(data);
            localStorage.setItem('easyTruck_quote_data', JSON.stringify(data))
            this.disable = true
            console.log('Quote Sent Successfully');
            this.error.show = true;
            this.error.msg = 'Calculating your fee in a bit!!!';
            setTimeout(() => {
              this.disable = false
              this.error.show = false;
              this.error.msg = '';
              this._router.navigate(['/quotation']);
            }, 3000);
          },
          error => { console.error(error) }
        )
    }

  }
  get email() {
    return this.quoteForm.get('email');
  }
  get firstName() {
    return this.quoteForm.get('firstName');
  }
  get phone() {
    return this.quoteForm.get('phone');
  }
  get pickUpLocation() {
    return this.quoteForm.get('pickUpLocation');
  }
  get dropOffLocation() {
    return this.quoteForm.get('dropOffLocation');
  }
  get pickUpDate() {
    return this.quoteForm.get('pickUpDate');
  }
  get pickUpTime() {
    return this.quoteForm.get('pickUpTime');
  }
  get description() {
    return this.quoteForm.get('description');
  }
  get truckSelection() {
    return this.quoteForm.get('truckSelection');
  }
  get packaging() {
    return this.quoteForm.get('packaging');
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
      (<any>$('select#select_truck')).val();
      // (<any>$("#select_truck")).change(function() {
      //   console.log($('select#select_truck').val());
      //   });
      // (<any>$('#select_truck')).on('change', function() {
      //   $('#truckSelection').val($('select#select_truck').val());
      // });
      // updating text fields overlapping
      Materialize.updateTextFields();
      //init text area
      (<any>$('#description')).trigger('autoresize');

      //init datepicker
      (<any>$('.datepicker')).pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 2, // Creates a dropdown of 15 years to control
        today: 'Today',
        clear: 'Continue',
        close: 'Ok',
        closeOnSelect: true, // Close upon selecting a date,
        container: undefined, // ex. 'body' will append picker to body

      });

      // init timepicker
      // (<any>$('.timepicker')).pickatime({
      //   default: 'now', // Set default time: 'now', '1:30AM', '16:30'
      //   fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
      //   twelvehour: true, // Use AM/PM or 24-hour format
      //   donetext: 'OK', // text for done-button
      //   cleartext: 'Clear', // text for clear-button
      //   canceltext: 'Cancel', // Text for cancel-button,
      //   container: undefined, // ex. 'body' will append picker to body
      //   autoclose: true, // automatic close timepicker
      //   ampmclickable: true, // make AM PM clickable
      //   aftershow: function () { }, //Function for after opening timepicker
      //   onSelect: function(time) {
      //     console.log(time)
      //   }
      // });



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
