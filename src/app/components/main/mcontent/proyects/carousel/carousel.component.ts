import { noUndefined } from '@angular/compiler/src/util';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { ModalService } from 'src/app/services/modal.service';

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
  modalTitle: any;

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
      carouselImg: '',
      carouseldot: 1,
      activeDot: 'active-dot',
      carouselDescription: '',
    },
    {
      carouselImg: '',
      carouseldot: 2,
      activeDot: '',
      carouselDescription: '',
    },
    {
      carouselImg: '',
      carouseldot: 3,
      activeDot: '',
      carouselDescription: '',
    },
    {
      carouselImg: '',
      carouseldot: 4,
      activeDot: '',
      carouselDescription: '',
    },
    {
      carouselImg: '',
      carouseldot: 5,
      activeDot: '',
      carouselDescription: '',
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

  /* Start Function clean Slides */
  slidesClean = () => {
    for (let i = 0; i < 5; i++) {
      this.carouselSlides[i].carouselImg = '';
      this.carouselSlides[i].carouselDescription = '';
    }
  };
  /* End Function clean Slides */

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

  constructor(private modalService: ModalService) {}

  ngOnInit() {
    // this.descriptionActive = this.carouselSlides[0].carouselDescription;
    this.modalTitle = [];

    this.modalService.modalTitle$.subscribe((title) => {
      this.slidesClean();
      this.modalTitle = title;
      this.carouselSlides[0].carouselImg = this.modalTitle.slidesProyect[0];
      this.carouselSlides[1].carouselImg = this.modalTitle.slidesProyect[1];
      this.carouselSlides[2].carouselImg = this.modalTitle.slidesProyect[2];
      this.carouselSlides[3].carouselImg = this.modalTitle.slidesProyect[3];
      this.carouselSlides[4].carouselImg = this.modalTitle.slidesProyect[4];

      this.descriptionActive = this.modalTitle.caption[0];

      this.carouselSlides[0].carouselDescription = this.modalTitle.caption[0];
      this.carouselSlides[1].carouselDescription = this.modalTitle.caption[1];
      this.carouselSlides[2].carouselDescription = this.modalTitle.caption[2];
      this.carouselSlides[3].carouselDescription = this.modalTitle.caption[3];
      this.carouselSlides[4].carouselDescription = this.modalTitle.caption[4];
    });
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
