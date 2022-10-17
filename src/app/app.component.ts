import { Component, OnInit } from '@angular/core';
import { RouteService } from 'src/app/services/route.service';
import { ModalService } from 'src/app/services/modal.service';
import { SidenavService } from 'src/app/services/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: {
    '(window:resize)': 'onResize($event)',
  },
})
export class AppComponent implements OnInit {
  /* Start Variables of App Component */
  title = 'Portfolio_Angular';
  messageLayout: boolean = true;
  heightMain: any;

  routeLocationOrigin = window.location.pathname;
  routeLoactionSearch = this.routeLocationOrigin.lastIndexOf('/');
  routeLocation = this.routeLocationOrigin.slice(this.routeLoactionSearch);

  modalSwitch: any;
  modalEnable: any;

  sidenavStatus = 'Open';
  sidenavTransition = 0;
  /* End Variables of App Component */

  /* Start onResize Function */
  onResize = (event: any) => {
    this.sidenavTransition = 0;
  };
  /* End onResize Function */

  /* Start Function to assign Background for the Components */
  heightMainSize = () => {
    switch (true) {
      case this.routeLocation == '/home':
        this.heightMain = 'vh-home';
        this.modalEnable = true;
        break;
      case this.routeLocation == '/about-me':
        this.heightMain = 'vh-about-me';
        this.modalEnable = true;
        break;
      case this.routeLocation == '/services':
        this.heightMain = 'vh-services';
        this.modalEnable = true;
        break;
      case this.routeLocation == '/skills':
        this.heightMain = 'vh-skills';
        this.modalEnable = true;
        break;
      case this.routeLocation == '/proyects':
        this.heightMain = 'vh-proyects';
        this.modalEnable = false;
        break;
      case this.routeLocation == '/contact':
        this.heightMain = 'vh-contact';
        this.modalEnable = true;
        break;
      default:
        this.heightMain = 'vh-home';
        this.modalEnable = true;
        break;
    }
  };
  /* End Function to assign Background for the Components */

  constructor(
    private routeService: RouteService,
    private modalService: ModalService,
    private sidenavService: SidenavService
  ) {}

  ngOnInit() {
    this.heightMainSize();

    /* Start Change value routeLoaction for the Service */
    this.routeService.route$.subscribe((nameRoute) => {
      this.routeLocation = nameRoute;
      this.heightMainSize();
    });
    /* End Change value routeLoaction for the Service */

    /* Start Change value modalSwitch for the Service */
    this.modalService.modal$.subscribe((modalValue) => {
      setTimeout(() => {
        this.modalSwitch = modalValue;
      }, 200);
    });
    /* End Change value modalSwitch for the Service */

    /* Start Change value sidenavStatus for the Service */
    this.sidenavService.sidenav$.subscribe((status) => {
      this.sidenavStatus = status;
    });
    /* End Change value sidenavStatus for the Service */

    /* Start value sidenavTransition for the Service */
    this.sidenavService.transition$.subscribe((transition) => {
      this.sidenavTransition = transition;
    });
    /* End value sidenavTransition for the Service */
  }

  ngOnDestroy() {
    /* Start Unsubscribe of services after usage */
    this.heightMainSize();
    /* End Unsubscribe of services after usage */
  }
}
