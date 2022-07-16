import { Component, OnInit } from '@angular/core';
import { faLaptopCode, faBars } from '@fortawesome/free-solid-svg-icons';
import { SidenavService } from 'src/app/services/sidenav.service';
import { RouteService } from 'src/app/services/route.service';

import { fromEvent, Observable, Subscription } from 'rxjs';

@Component({
  selector: '.app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  host: {
    '(window:resize)': 'onResize($event)',
  },
})
export class HeaderComponent implements OnInit {
  faLaptopCode = faLaptopCode;
  faBars = faBars;

  isDisplay = 'Open';
  transitionS = 0.3;
  nameRoute = '';

  sizeDisplay: number = window.innerWidth;

  onResize(event: any) {
    this.sizeDisplay = window.innerWidth;
    console.log('Header resize:' + event.target.innerWidth); // window width
  }

  constructor(
    private sidenavService: SidenavService,
    private routeService: RouteService
  ) {}

  /*Start Button Header function*/

  clickToggle() {
    switch (this.isDisplay) {
      case 'Open':
        this.isDisplay = 'Closed';
        this.sidenavService.sidenav$.emit(this.isDisplay);
        this.sidenavService.transition$.emit(this.transitionS);
        break;
      case 'Closed':
        this.isDisplay = 'Open';
        this.sidenavService.sidenav$.emit(this.isDisplay);
        this.sidenavService.transition$.emit(this.transitionS);
        break;
    }
  }
  /*End Button Header function*/

  clickRoute() {
    this.nameRoute = '/home';
    this.routeService.route$.emit(this.nameRoute);
  }

  ngOnInit(): void {}
}
