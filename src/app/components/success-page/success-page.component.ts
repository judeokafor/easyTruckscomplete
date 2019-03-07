import { Component, OnInit } from '@angular/core';

import { Quote } from '../../models/quote';

declare var $: any;
@Component({
  selector: 'app-success-page',
  templateUrl: './success-page.component.html',
  styleUrls: ['./success-page.component.css']
})
export class SuccessPageComponent implements OnInit {
  quotes: Quote;
  constructor() { }

  ngOnInit() {
    this.jquery_code();
    this.getQuoteData();
  }
  getQuoteData() {
    const quote = JSON.parse(localStorage.getItem('easyTruck_quote_data'));
    this.quotes = quote;
    console.log(this.quotes);
  }
  jquery_code() {
    //hide section
    $(".section").hide();

    setTimeout(() => {
      $(document).ready(() => {
        //show sections
        (<any>$(".section")).fadeIn();

        //hide preloader
        (<any>$(".loader")).fadeOut();
      })
    }, 1000);
  }
}
