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
  descriptionActive: any;

  carouselSlides: any[] = [
    {
      carouselImg: './assets/images/platzi_video/slide_1.jpg',
      carouseldot: 1,
      activeDot: 'active-dot',
      carouselDescription: 'Dashboard principal',
    },
    {
      carouselImg: './assets/images/platzi_video/slide_2.jpg',
      carouseldot: 2,
      activeDot: '',
      carouselDescription: 'Inicio de sesión',
    },
    {
      carouselImg: './assets/images/platzi_video/slide_3.jpg',
      carouseldot: 3,
      activeDot: '',
      carouselDescription: 'Error 404',
    },
    {
      carouselImg: './assets/images/platzi_video/slide_4.jpg',
      carouseldot: 4,
      activeDot: '',
      carouselDescription: 'Registro de usuario',
    },
    {
      carouselImg: './assets/images/platzi_video/slide_5.jpg',
      carouseldot: 5,
      activeDot: '',
      carouselDescription: 'Carousel de imagenes',
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
        this.descriptionActive = this.carouselSlides[0].carouselDescription;
        break;
      case this.clickSum == 2:
        this.carouselMove.nativeElement.scrollTo({
          left: this.slideMove2,
        });
        this.carouselSlides[1].activeDot = this.dotClass;
        this.descriptionActive = this.carouselSlides[1].carouselDescription;
        break;
      case this.clickSum == 3:
        this.carouselMove.nativeElement.scrollTo({
          left: this.slideMove3,
        });
        this.carouselSlides[2].activeDot = this.dotClass;
        this.descriptionActive = this.carouselSlides[2].carouselDescription;
        break;
      case this.clickSum == 4:
        this.carouselMove.nativeElement.scrollTo({
          left: this.slideMove4,
        });
        this.carouselSlides[3].activeDot = this.dotClass;
        this.descriptionActive = this.carouselSlides[3].carouselDescription;
        break;
      case this.clickSum == 5:
        this.carouselMove.nativeElement.scrollTo({
          left: this.slideMove5,
        });
        this.carouselSlides[4].activeDot = this.dotClass;
        this.descriptionActive = this.carouselSlides[4].carouselDescription;
        break;
      case this.clickSum > 5:
        this.clickSum = 5;
        this.carouselSlides[4].activeDot = this.dotClass;
        this.descriptionActive = this.carouselSlides[4].carouselDescription;
        break;
      case this.clickSum < 1:
        this.clickSum = 1;
        this.carouselSlides[0].activeDot = this.dotClass;
        this.descriptionActive = this.carouselSlides[0].carouselDescription;
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

  ngOnInit() {
    this.descriptionActive = this.carouselSlides[0].carouselDescription;
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
