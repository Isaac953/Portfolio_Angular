import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  containerSlide: any;

  @ViewChild('carouselMove')
  carouselMove!: ElementRef;

  carouselSlides: any[] = [
    {
      carouselImg: 'Imagen 1',
      carouselBackground: 'darkblue',
    },
    {
      carouselImg: 'Imagen 2',
      carouselBackground: 'rgb(138, 138, 16)',
    },
    {
      carouselImg: 'Imagen 3',
      carouselBackground: 'brown',
    },
    {
      carouselImg: 'Imagen 4',
      carouselBackground: 'green',
    },
    {
      carouselImg: 'Imagen 5',
      carouselBackground: 'red',
    },
  ];

  constructor() {}

  backSlide = (backValue: number) => {
    // this.containerSlide = document.getElementById('container');
    // this.containerSlide.scrollLeft -= 700;
    this.carouselMove.nativeElement.scrollLeft -= 700;
    this.clickSum = this.clickSum - backValue;
    console.log(this.clickSum);
    this.transitionSlideBack();
  };

  nextSlide = (nextValue: number) => {
    // this.containerSlide = document.getElementById('container');
    // this.containerSlide.scrollLeft += 700;
    this.carouselMove.nativeElement.scrollLeft += 700;
    this.clickSum = this.clickSum + nextValue;
    console.log(this.clickSum);
    this.transitionSlideNext();
  };

  transitionSlideNext = () => {
    switch (true) {
      case this.clickSum == 1:
        break;
      case this.clickSum == 2:
        break;
      case this.clickSum == 3:
        break;
      case this.clickSum == 4:
        break;
      case this.clickSum == 5:
        break;
      default:
        break;
    }
  };

  transitionSlideBack = () => {
    switch (true) {
      case this.clickSum == 1:
        break;
      case this.clickSum == 2:
        break;
      case this.clickSum == 3:
        break;
      case this.clickSum == 4:
        break;
      case this.clickSum == 5:
        break;
      default:
        break;
    }
  };

  ngOnInit(): void {}
}
