import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper/core';

SwiperCore.use([Navigation, Pagination, Autoplay]);

@Component({
  selector: 'app-rechtangle',
  templateUrl: './rechtangle.component.html',
  styleUrls: ['./rechtangle.component.scss'],
})
export class RechtangleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      direction: 'horizontal',
      loop: false,
      autoplay: {
        delay: 5000,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}
