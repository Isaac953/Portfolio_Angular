import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  faAngleRight = faAngleRight;
  faAngleLeft = faAngleLeft;
  clickSum = 1;

  @ViewChild('carouselMove')
  carouselMove!: ElementRef;

  direction = '';
  arrowJustify = 'right';

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

  nextSlide = (nextValue: number) => {
    this.clickSum = this.clickSum + nextValue;
    switch (true) {
      case this.clickSum == 1:
        this.arrowJustify = 'right';
        this.carouselMove.nativeElement.scrollTo({
          left: 0,
          behavior: 'smooth',
        });
        break;
      case this.clickSum == 2:
        this.arrowJustify = 'center';
        this.carouselMove.nativeElement.scrollTo({
          left: 700,
          behavior: 'smooth',
        });
        break;
      case this.clickSum == 3:
        this.arrowJustify = 'center';
        this.carouselMove.nativeElement.scrollTo({
          left: 1400,
          behavior: 'smooth',
        });
        break;
      case this.clickSum == 4:
        this.arrowJustify = 'center';
        this.carouselMove.nativeElement.scrollTo({
          left: 2100,
          behavior: 'smooth',
        });
        break;
      case this.clickSum == 5:
        this.arrowJustify = 'left';
        this.carouselMove.nativeElement.scrollTo({
          left: 2800,
          behavior: 'smooth',
        });
        break;
      default:
        this.clickSum = 5;
        break;
    }
  };

  backSlide = (backValue: number) => {
    this.clickSum = this.clickSum - backValue;
    switch (true) {
      case this.clickSum == 1:
        this.arrowJustify = 'right';
        this.carouselMove.nativeElement.scrollTo({
          left: 0,
          behavior: 'smooth',
        });
        break;
      case this.clickSum == 2:
        this.arrowJustify = 'center';
        this.carouselMove.nativeElement.scrollTo({
          left: 700,
          behavior: 'smooth',
        });
        break;
      case this.clickSum == 3:
        this.arrowJustify = 'center';
        this.carouselMove.nativeElement.scrollTo({
          left: 1400,
          behavior: 'smooth',
        });
        break;
      case this.clickSum == 4:
        this.arrowJustify = 'center';
        this.carouselMove.nativeElement.scrollTo({
          left: 2100,
          behavior: 'smooth',
        });
        break;
      case this.clickSum == 5:
        this.arrowJustify = 'left';
        this.carouselMove.nativeElement.scrollTo({
          left: 2800,
          behavior: 'smooth',
        });
        break;
      default:
        this.clickSum = 1;
        break;
    }
  };

  buttonSlide = (buttonValue: number) => {
    setTimeout(() => {
      this.clickSum = buttonValue;
      switch (true) {
        case this.clickSum == 1:
          this.arrowJustify = 'right';
          this.carouselMove.nativeElement.scrollTo({ left: 0 });
          break;
        case this.clickSum == 2:
          this.arrowJustify = 'center';
          this.carouselMove.nativeElement.scrollTo({ left: 700 });
          break;
        case this.clickSum == 3:
          this.arrowJustify = 'center';
          this.carouselMove.nativeElement.scrollTo({ left: 1400 });
          break;
        case this.clickSum == 4:
          this.arrowJustify = 'center';
          this.carouselMove.nativeElement.scrollTo({ left: 2100 });
          break;
        case this.clickSum == 5:
          this.arrowJustify = 'left';
          this.carouselMove.nativeElement.scrollTo({ left: 2800 });
          break;
        default:
          break;
      }
    }, 300);
  };

  // onSwipe(event: any) {
  //   const x =
  //     Math.abs(event.deltaX) > 40 ? (event.deltaX > 0 ? 'Right' : 'Left') : '';
  //   const y =
  //     Math.abs(event.deltaY) > 40 ? (event.deltaY > 0 ? 'Down' : 'Up') : '';

  //   this.direction += `You swiped in <b> ${x} ${y} </b> direction <hr>`;
  // }

  ngOnInit(): void {}
}
