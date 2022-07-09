import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { faLaptopCode, faBars } from '@fortawesome/free-solid-svg-icons';
import { SidenavService } from 'src/app/services/sidenav.service';

@Component({
  selector: '.app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  faLaptopCode = faLaptopCode;
  faBars = faBars;

  isDisplay = 'Open';
  transitionS = 0.3;

  constructor(private sidenavService: SidenavService) {}

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

  ngOnInit(): void {}
}
