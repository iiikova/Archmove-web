import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper/core';

// configure Swiper to use modules
SwiperCore.use([Navigation, Pagination, Autoplay]);

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const swiper_2 = new Swiper('.swiper-container-2', {
      slidesPerView: 4,
      spaceBetween: 200,
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
