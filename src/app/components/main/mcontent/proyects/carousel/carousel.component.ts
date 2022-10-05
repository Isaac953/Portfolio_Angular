import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  host: {
    '(window:resize)': 'onResize($event)',
  },
})
export class CarouselComponent implements OnInit {
  faAngleRight = faAngleRight;
  faAngleLeft = faAngleLeft;
  clickSum = 1;

  @ViewChild('carouselMove')
  carouselMove!: ElementRef;

  // slideSize = Number(this.carouselMove.nativeElement.offsetWidth);
  slideSize: any;
  slideMove1: any;
  slideMove2: any;
  slideMove3: any;
  slideMove4: any;
  slideMove5: any;

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

  nextSlide = (nextValue: number) => {
    setTimeout(() => {
      this.clickSum = this.clickSum + nextValue;
    switch (true) {
      case this.clickSum == 1:
        this.carouselMove.nativeElement.scrollTo({
          left: this.slideMove1,
          behavior: 'smooth',
        });
        break;
      case this.clickSum == 2:
        this.carouselMove.nativeElement.scrollTo({
          left: this.slideMove2,
          behavior: 'smooth',
        });
        break;
      case this.clickSum == 3:
        this.carouselMove.nativeElement.scrollTo({
          left: this.slideMove3,
          behavior: 'smooth',
        });
        break;
      case this.clickSum == 4:
        this.carouselMove.nativeElement.scrollTo({
          left: this.slideMove4,
          behavior: 'smooth',
        });
        break;
      case this.clickSum == 5:
        this.carouselMove.nativeElement.scrollTo({
          left: this.slideMove5,
          behavior: 'smooth',
        });
        break;
      default:
        this.clickSum = 5;
        break;
    }}, 300);
  };

  backSlide = (backValue: number) => {
    
    setTimeout(() => {
      this.clickSum = this.clickSum - backValue;
    switch (true) {
      case this.clickSum == 1:
        this.carouselMove.nativeElement.scrollTo({
          left: this.slideMove1,
          behavior: 'smooth',
        });
        break;
      case this.clickSum == 2:
        this.carouselMove.nativeElement.scrollTo({
          left: this.slideMove2,
          behavior: 'smooth',
        });
        break;
      case this.clickSum == 3:
        this.carouselMove.nativeElement.scrollTo({
          left: this.slideMove3,
          behavior: 'smooth',
        });
        break;
      case this.clickSum == 4:
        this.carouselMove.nativeElement.scrollTo({
          left: this.slideMove4,
          behavior: 'smooth',
        });
        break;
      case this.clickSum == 5:
        this.carouselMove.nativeElement.scrollTo({
          left: this.slideMove5,
          behavior: 'smooth',
        });
        break;
      default:
        this.clickSum = 1;
        break;
    }}, 300);
  };

  buttonSlide = (buttonValue: number) => {
    setTimeout(() => {
      this.clickSum = buttonValue;
      switch (true) {
        case this.clickSum == 1:
          this.carouselMove.nativeElement.scrollTo({ left: this.slideMove1 });
          break;
        case this.clickSum == 2:
          this.carouselMove.nativeElement.scrollTo({ left: this.slideMove2 });
          break;
        case this.clickSum == 3:
          this.carouselMove.nativeElement.scrollTo({ left: this.slideMove3 });
          break;
        case this.clickSum == 4:
          this.carouselMove.nativeElement.scrollTo({ left: this.slideMove4 });
          break;
        case this.clickSum == 5:
          this.carouselMove.nativeElement.scrollTo({ left: this.slideMove5 });
          break;
        default:
          break;
      }
    }, 300);
  };

  /* Start Function onResize */
  onResize = (event: any) => {
    this.slideSize = this.carouselMove.nativeElement.offsetWidth;
    this.slideMove1 = this.slideSize * 0;
    this.slideMove2 = this.slideSize * 1;
    this.slideMove3 = this.slideSize * 2;
    this.slideMove4 = this.slideSize * 3;
    this.slideMove5 = this.slideSize * 4;    
  };
  /* End Function onResize */

  constructor() {}

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    this.slideSize = this.carouselMove.nativeElement.offsetWidth;
    this.slideMove1 = this.slideSize * 0;
    this.slideMove2 = this.slideSize * 1;
    this.slideMove3 = this.slideSize * 2;
    this.slideMove4 = this.slideSize * 3;
    this.slideMove5 = this.slideSize * 4;    
  }
}
