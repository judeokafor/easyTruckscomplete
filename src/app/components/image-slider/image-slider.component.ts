import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.jquery_code();
  }
  
  jquery_code() {

    setTimeout(() => {
      $(document).ready(() => {
        //hide preloader
        (<any>$(".slider")).slider({
          indicators: false,
          height: 500,
          transition: 500,
          interval: 5000,
        });
      });
    }, 2000);
  }
}
