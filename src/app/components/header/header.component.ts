import { Component, OnInit } from '@angular/core';
import { faLaptopCode, faBars } from '@fortawesome/free-solid-svg-icons';
import { SidenavService } from 'src/app/services/sidenav.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  host: {
    '(window:resize)': 'onResize($event)',
  },
})
export class HeaderComponent implements OnInit {
  /*Font Awesome icons*/
  faLaptopCode = faLaptopCode;
  faBars = faBars;

  myName = ' Isaac Arias';
  sizeDisplay = window.innerWidth;
  typeDisplay: any;
  sidenavStatus = 'Open';
  sidenavTransition = 0.3;

  /*Function get Size Screen*/
  nameDisplay = () => {
    switch (true) {
      case this.sizeDisplay >= 1024:
        this.typeDisplay = 'Big Screem';
        break;
      case this.sizeDisplay < 1024 && this.sizeDisplay >= 768:
        this.typeDisplay = 'Medium Screem';
        break;
      case this.sizeDisplay < 768:
        this.typeDisplay = 'Small Screem';
        break;
    }
  };

  /*Function click Button Header change status Sidenav*/
  changeSidenav = () => {
    switch (this.sidenavStatus) {
      case 'Open':
        this.sidenavStatus = 'Closed';
        this.sidenavService.sidenav$.emit(this.sidenavStatus);
        this.sidenavService.transition$.emit(this.sidenavTransition);
        break;
      case 'Closed':
        this.sidenavStatus = 'Open';
        this.sidenavService.sidenav$.emit(this.sidenavStatus);
        this.sidenavService.transition$.emit(this.sidenavTransition);
        break;
    }
  };

  /*onResize Function*/
  onResize(event: any) {
    this.sizeDisplay = window.innerWidth;
    this.nameDisplay();
    console.log('Header resize:' + event.target.innerWidth); // window width
  }

  constructor(private sidenavService: SidenavService) {}

  ngOnInit() {
    this.nameDisplay();
  }
}
