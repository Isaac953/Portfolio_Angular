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
  /* Start Variables of Carousel Component */
  faAngleRight = faAngleRight;
  faAngleLeft = faAngleLeft;
  clickSum = 1;

  @ViewChild('carouselMove')
  carouselMove!: ElementRef;

  slideSize: any;
  slideMove1: any;
  slideMove2: any;
  slideMove3: any;
  slideMove4: any;
  slideMove5: any;

  dotClass = 'active-dot';

  carouselSlides: any[] = [
    {
      carouselImg: 'Imagen 1',
      carouselBackground: 'darkblue',
      carouseldot: 1,
      activeDot: 'active-dot',
    },
    {
      carouselImg: 'Imagen 2',
      carouselBackground: 'rgb(138, 138, 16)',
      carouseldot: 2,
      activeDot: '',
    },
    {
      carouselImg: 'Imagen 3',
      carouselBackground: 'brown',
      carouseldot: 3,
      activeDot: '',
    },
    {
      carouselImg: 'Imagen 4',
      carouselBackground: 'green',
      carouseldot: 4,
      activeDot: '',
    },
    {
      carouselImg: 'Imagen 5',
      carouselBackground: 'red',
      carouseldot: 5,
      activeDot: '',
    },
  ];
  /* End Variables of Carousel Component */

  /* Start Function next move Slide */
  nextSlide = (nextValue: number) => {
    setTimeout(() => {
      this.clickSum = this.clickSum + nextValue;
      this.dotsClean();
      this.slidesCase();
    }, 300);
  };
  /* End Function next move Slide*/

  /* Start Function back move Slide */
  backSlide = (backValue: number) => {
    setTimeout(() => {
      this.clickSum = this.clickSum - backValue;
      this.dotsClean();
      this.slidesCase();
    }, 300);
  };
  /* End Function back move Slide */

  /* Start Function dots move Slide */
  buttonSlide = (buttonValue: number) => {
    setTimeout(() => {
      this.clickSum = buttonValue;
      this.dotsClean();
      this.slidesCase();
    }, 300);
  };
  /* End Function dots move Slide */

  /* Start Function dots move Slide */
  slidesCase = () => {
    switch (true) {
      case this.clickSum == 1:
        this.carouselMove.nativeElement.scrollTo({
          left: this.slideMove1,
        });
        this.carouselSlides[0].activeDot = this.dotClass;
        break;
      case this.clickSum == 2:
        this.carouselMove.nativeElement.scrollTo({
          left: this.slideMove2,
        });
        this.carouselSlides[1].activeDot = this.dotClass;
        break;
      case this.clickSum == 3:
        this.carouselMove.nativeElement.scrollTo({
          left: this.slideMove3,
        });
        this.carouselSlides[2].activeDot = this.dotClass;
        break;
      case this.clickSum == 4:
        this.carouselMove.nativeElement.scrollTo({
          left: this.slideMove4,
        });
        this.carouselSlides[3].activeDot = this.dotClass;
        break;
      case this.clickSum == 5:
        this.carouselMove.nativeElement.scrollTo({
          left: this.slideMove5,
        });
        this.carouselSlides[4].activeDot = this.dotClass;
        break;
      case this.clickSum > 5:
        this.clickSum = 5;
        this.carouselSlides[4].activeDot = this.dotClass;
        break;
      case this.clickSum < 1:
        this.clickSum = 1;
        this.carouselSlides[0].activeDot = this.dotClass;
        break;
    }
  };
  /* End Function dots move Slide */

  /* Start Function clean class Dots */
  dotsClean = () => {
    for (let i = 0; i < 5; i++) {
      this.carouselSlides[i].activeDot = '';
    }
  };

  /* End Function clean class Dots */

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

  ngOnInit() {}

  ngAfterViewInit() {
    this.slideSize = this.carouselMove.nativeElement.offsetWidth;
    this.slideMove1 = this.slideSize * 0;
    this.slideMove2 = this.slideSize * 1;
    this.slideMove3 = this.slideSize * 2;
    this.slideMove4 = this.slideSize * 3;
    this.slideMove5 = this.slideSize * 4;
  }
}
