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

  carouselSlides: any[] = [
    {
      carouselImg: 'Imagen 1',
      carouselBackground: 'darkblue',
      carouselClass: 'inactive',
    },
    {
      carouselImg: 'Imagen 2',
      carouselBackground: 'rgb(138, 138, 16)',
      carouselClass: 'inactive',
    },
    {
      carouselImg: 'Imagen 3',
      carouselBackground: 'brown',
      carouselClass: 'inactive',
    },
    {
      carouselImg: 'Imagen 4',
      carouselBackground: 'green',
      carouselClass: 'inactive',
    },
    {
      carouselImg: 'Imagen 5',
      carouselBackground: 'red',
      carouselClass: 'inactive',
    },
  ];

  constructor() {}

  backSlide = (backValue: number) => {
    this.clickSum = this.clickSum - backValue;
    console.log(this.clickSum);
    return backValue;
  };

  nextSlide = (nextValue: number) => {
    this.clickSum = this.clickSum + nextValue;
    console.log(this.clickSum);
    return nextValue;
  };

  ngOnInit(): void {}
}
