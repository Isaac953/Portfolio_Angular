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
  clickMove = 0;
  carouselSlides: any;
  slidesLength: any;
  slideSize: any;
  slideMove: any;

  @ViewChild('carouselMove')
  carouselMove!: ElementRef;

  dotClass = 'active-dot';
  descriptionActive: any;

  /* End Variables of Carousel Component */

  /* Start Function onResize */
  onResize = (event: any) => {
    this.slideSize = this.carouselMove.nativeElement.offsetWidth;
    this.slideMove = this.slideSize * this.clickMove;
  };
  /* End Function onResize */

  /* Start Function next move Slide */
  nextSlide = (nextValue: number) => {
    setTimeout(() => {
      this.clickSum = this.clickSum + nextValue;
      this.clickMove = this.clickMove + nextValue;
      this.slidesCase();
    }, 300);
  };
  /* End Function next move Slide*/

  /* Start Function back move Slide */
  backSlide = (backValue: number) => {
    setTimeout(() => {
      this.clickSum = this.clickSum - backValue;
      this.clickMove = this.clickMove - backValue;
      this.slidesCase();
    }, 300);
  };
  /* End Function back move Slide */

  /* Start Function dots move Slide */
  buttonSlide = (buttonValue: number) => {
    setTimeout(() => {
      this.clickSum = buttonValue;
      this.clickMove = buttonValue - 1;
      this.slidesCase();
    }, 300);
  };
  /* End Function dots move Slide */

  /* Start Function dots move Slide */
  slidesCase = () => {
    this.limitSum();
    this.dotsClean();
    this.slideMove = this.slideSize * this.clickMove;
    this.carouselMove.nativeElement.scrollTo({
      left: this.slideMove,
    });
    this.carouselSlides.slides[this.clickMove].activeDot = this.dotClass;
    this.descriptionActive = this.carouselSlides.slides[this.clickMove].caption;
  };
  /* End Function dots move Slide */

  /* Start Function limitSum */
  limitSum = () => {
    switch (true) {
      case this.clickSum > this.slidesLength:
        this.clickSum = this.slidesLength;
        this.clickMove = this.slidesLength - 1;
        break;
      case this.clickSum === 0:
        this.clickSum = 1;
        this.clickMove = 0;
        break;
    }
  };
  /* End Function limitSum */

  /* Start Function clean class Dots */
  dotsClean = () => {
    for (let i = 0; i < this.slidesLength; i++) {
      this.carouselSlides.slides[i].activeDot = '';
    }
  };
  /* End Function clean class Dots */

  constructor(private modalService: ModalService) {}

  ngOnInit() {
    this.carouselSlides = [];

    /* Start fill Values modalTitle for the Service */
    this.modalService.modalTitle$.subscribe((slides) => {
      this.dotsClean();
      this.clickSum = 1;
      this.clickMove = 0;
      this.carouselMove.nativeElement.scrollTo({
        left: 0,
      });
      this.carouselSlides = slides;
      this.slidesLength = this.carouselSlides.slides.length;
      this.descriptionActive = this.carouselSlides.slides[0].caption;
      this.carouselSlides.slides[0].activeDot = this.dotClass;
    });
    /* End  fill Values modalTitle for the Service */
  }

  ngAfterViewInit() {
    this.slideSize = this.carouselMove.nativeElement.offsetWidth;
  }
}
