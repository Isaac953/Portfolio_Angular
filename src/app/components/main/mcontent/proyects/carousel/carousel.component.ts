import { Component, OnInit } from '@angular/core';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  marginLeft: any;
  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;
  clickSum = 1;
  classSlideNext = 'slidenext';
  classSlideBack = 'slideback';

  carouselSlides: any[] = [
    {
      carouselImg: 'Imagen 1',
      carouselBackground: 'darkblue',
      carouselMargin: 0,
    },
    {
      carouselImg: 'Imagen 2',
      carouselBackground: 'rgb(138, 138, 16)',
      carouselMargin: 0,
    },
    {
      carouselImg: 'Imagen 3',
      carouselBackground: 'brown',
      carouselMargin: 0,
    },
    {
      carouselImg: 'Imagen 4',
      carouselBackground: 'green',
      carouselMargin: 0,
    },
    {
      carouselImg: 'Imagen 5',
      carouselBackground: 'red',
      carouselMargin: 0,
    },
  ];

  constructor() {}

  backSlide = (backValue: number) => {
    this.clickSum = this.clickSum - backValue;
    console.log(this.clickSum);
    this.transitionSlideBack();
  };

  nextSlide = (nextValue: number) => {
    this.clickSum = this.clickSum + nextValue;
    console.log(this.clickSum);
    this.transitionSlideNext();
  };

  transitionSlideNext = () => {
    switch (true) {
      case this.clickSum == 1:
        this.carouselSlides[0].carouselMargin = -700;
        break;
      case this.clickSum == 2:
        this.carouselSlides[1].carouselMargin = -700;
        break;
      case this.clickSum == 3:
        this.carouselSlides[2].carouselMargin = -700;
        break;
      case this.clickSum == 4:
        this.carouselSlides[3].carouselMargin = -700;
        break;
      case this.clickSum == 5:
        this.carouselSlides[4].carouselMargin = -700;
        break;
      default:
        break;
    }
  };

  transitionSlideBack = () => {
    switch (true) {
      case this.clickSum == 1:
        this.carouselSlides[1].carouselMargin = 0;
        break;
      case this.clickSum == 2:
        this.carouselSlides[2].carouselMargin = 0;
        break;
      case this.clickSum == 3:
        this.carouselSlides[3].carouselMargin = 0;
        break;
      case this.clickSum == 4:
        this.carouselSlides[4].carouselMargin = 0;
        break;
      case this.clickSum == 5:
        this.carouselSlides[4].carouselMargin = 700;
        break;
      default:
        break;
    }
  };

  ngOnInit(): void {}
}
