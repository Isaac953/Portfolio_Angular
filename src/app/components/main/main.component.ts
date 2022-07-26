import { Component, OnInit } from '@angular/core';
import { SidenavService } from 'src/app/services/sidenav.service';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  host: {
    '(window:resize)': 'onResize($event)',
  },
})
export class MainComponent implements OnInit {
  sidenavStatus = 'Open';
  sidenavTransition = 0;
  sizeDisplay = window.innerWidth;

  /*onResize Function*/
  onResize(event: any) {
    this.sidenavTransition = 0;
  }

  constructor(private sidenavService: SidenavService) {}

  ngOnInit() {
    /* Change value sidenavStatus for the Service */
    this.sidenavService.sidenav$.subscribe((status) => {
      this.sidenavStatus = status;
      console.log('navbar:', status);
    });

    /* Change value sidenavTransition for the Service */
    this.sidenavService.transition$.subscribe((transition) => {
      this.sidenavTransition = transition;
      console.log('transition:', transition);
    });
  }
}
