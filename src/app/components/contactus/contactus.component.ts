import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from "../../services/user.service";

import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';

import * as Materialize from 'materialize-css';
import { } from 'googlemaps';
declare var $: any;


@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  @ViewChild('map')
  mapElement: any;
  map: google.maps.Map;
  contactusForm: FormGroup = new FormGroup({
    name_contact: new FormControl(null, [Validators.required]),
    email_contact: new FormControl(null, [Validators.email,Validators.required]),
    phone_contact: new FormControl(null, [Validators.required]),
    message_contact: new FormControl(null, [Validators.required]),

  });
  error: any = {
    show: false,
    msg: '',
  };
  disable: boolean = false;
  

  // title: string = 'Our Office Location';
  // lat: number = 9.0897;
  // lng: number = 7.5678;

  constructor(private _router: Router,
    private _userService: UserService,
  ) { }

  ngOnInit() {

    // map options
    var options = {
      zoom: 11,
      center: { lat: 9.0579, lng: 7.4951 }

    }
    //new map
    var map = new google.maps.Map(document.getElementById('map'), options);

    var markers = [
      {
          coords: { lat: 9.0579, lng: 7.4951 },
        iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        content: '<p>Head Office</p><div>Emab Plaza opposite Banex </div> '
      },
      {
        coords: { lat: 9.0897, lng: 7.5678 },
        iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        content: '<h3>Truck Yard</h3><div>Tipper Garage Kubwa</div> '
      },
      {
        coords: { lat: 9.1009, lng: 7.7896 },
        iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        content: '<h3>Branch Office</h3><div>Suit 459 Gwarimpa, 1st Avenue </div> '
      }

    ];
    //loop through markers
    for (var i = 0; i < markers.length; i++) {
      //add marker
      addMarker(markers[i]);
    }
    //add Marker function
    function addMarker(props) {
      var marker = new google.maps.Marker({
        position: props.coords,
        map: map,
        animation: google.maps.Animation.BOUNCE,
        // icon: props.iconImage    (commented out)
      });

      //  check for custom icon
      if (props.iconImage) {
        //setIcon image
        marker.setIcon(props.iconImage);

      }
      //check for content
      if (props.content) {
        var infoWindow = new google.maps.InfoWindow({
          content: props.content
        });
        marker.addListener('click', function () {
          infoWindow.open(map, marker);
        });
      }
    }
    this.jquery_code();
  }
  submitContactUs() {
    if (!this.contactusForm.valid) {
      console.log('Invalid Form'); return;
    }
    else {
      this._userService.addContactUs(this.contactusForm.value)
        .subscribe(
          data => {
            console.log(data);
            this.disable = true
            console.log('Message sent succesfully');
            this.error.show = true;
            this.error.msg = 'Thanks. We will get back to you soon';
            setTimeout(() => {
              this.disable = false
              this.error.show = false;
              this.error.msg = '';
            }, 5000);
          },
          error => { console.error(error) }
        )
    }
  }
  get name_contact () {
    return this.contactusForm.get('name_contact');
  }
  get email_contact () {
    return this.contactusForm.get('email_contact');
  }
  get phone_contact () {
    return this.contactusForm.get('phone_contact');
  }
  get message_contact () {
    return this.contactusForm.get('message_contact');
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
