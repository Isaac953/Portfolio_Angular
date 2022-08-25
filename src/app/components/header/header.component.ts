import { Component, OnInit } from '@angular/core';
import { faLaptopCode, faBars } from '@fortawesome/free-solid-svg-icons';
import { SidenavService } from 'src/app/services/sidenav.service';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  host: {
    '(window:resize)': 'onResize($event)',
  },
})
export class HeaderComponent implements OnInit {
  /* Start Font Awesome icons */
  faLaptopCode = faLaptopCode;
  faBars = faBars;
  /* End Font Awesome icons */

  /* Start Variables of Header */
  myName = ' Isaac Arias';
  sizeDisplay = window.innerWidth;
  typeDisplay: any;
  sidenavStatus = 'Open';
  sidenavTransition = 0;
  nameRoute = '/home';
  messageRoute = 'Home Component';
  /* End Variables of Header */

  /* Start Function get Size Screen */
  nameDisplay = () => {
    switch (true) {
      case this.sizeDisplay >= 1024:
        this.typeDisplay = 'Big Screen';
        break;
      case this.sizeDisplay < 1024 && this.sizeDisplay >= 768:
        this.typeDisplay = 'Medium Screen';
        break;
      case this.sizeDisplay < 768:
        this.typeDisplay = 'Small Screen';
        break;
    }
  };
  /* End Function get Size Screen */

  /* Start Function Change Status of Sidenav */
  changeSidenav = () => {
    switch (this.sidenavStatus) {
      case 'Open':
        this.sidenavStatus = 'Closed';
        this.sidenavService.sidenav$.emit(this.sidenavStatus);
        this.sidenavTransition = 0.5;
        this.sidenavService.transition$.emit(this.sidenavTransition);
        break;
      case 'Closed':
        this.sidenavStatus = 'Open';
        this.sidenavService.sidenav$.emit(this.sidenavStatus);
        this.sidenavTransition = 0.5;
        this.sidenavService.transition$.emit(this.sidenavTransition);
        break;
    }
  };
  /* End Function Change Status of Sidenav */

  /* Start Function Send Route in MainContent */
  clickRoute = () => {
    this.routeService.route$.emit(this.nameRoute);
    this.routeService.routeMessage$.emit(this.messageRoute);
    this.sidenavTransition = 0;
    this.sidenavService.transition$.emit(this.sidenavTransition);
  };
  /* End Function Send Route in MainContent */

  /* Start Function onResize */
  onResize = (event: any) => {
    this.sizeDisplay = window.innerWidth;
    this.nameDisplay();
  };
  /* End Function onResize */

  constructor(
    private sidenavService: SidenavService,
    private routeService: RouteService
  ) {}

  ngOnInit() {
    this.nameDisplay();
  }
}
