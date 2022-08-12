import { Component, OnInit } from '@angular/core';
import { SidenavService } from 'src/app/services/sidenav.service';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  host: {
    '(window:resize)': 'onResize($event)',
  },
})
export class MainComponent implements OnInit {
  /* Start Variables of Main Component */
  sidenavStatus = 'Open';
  sidenavTransition = 0;
  sizeDisplay = window.innerWidth;

  routeLocationOrigin = window.location.pathname;
  routeLoactionSearch = this.routeLocationOrigin.lastIndexOf('/');
  routeLocation = this.routeLocationOrigin.slice(this.routeLoactionSearch);

  bgComponent: any;
  /* End Variables of Main Component */

  /* Start onResize Function */
  onResize = (event: any) => {
    this.sidenavTransition = 0;
  };
  /* End onResize Function */

  /* Start Function to assign Background for the Components */
  backgroundComp = () => {
    switch (true) {
      case this.routeLocation == '/home':
        this.bgComponent = 'bg-home';
        break;
      case this.routeLocation == '/about-me':
        this.bgComponent = 'bg-about-me';
        break;
      case this.routeLocation == '/services':
        this.bgComponent = 'bg-services';
        break;
      case this.routeLocation == '/skills':
        this.bgComponent = 'bg-skills';
        break;
      case this.routeLocation == '/proyects':
        this.bgComponent = 'bg-proyects';
        break;
      case this.routeLocation == '/contact':
        this.bgComponent = 'bg-contact';
        break;
      default:
        this.bgComponent = 'bg-home';
        break;
    }
  };
  /* End Function to assign Background for the Components */

  constructor(
    private sidenavService: SidenavService,
    private routeService: RouteService
  ) {}

  ngOnInit() {
    this.backgroundComp();

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

    /* Start Change value routeLoaction for the Service */
    this.routeService.route$.subscribe((nameRoute) => {
      this.routeLocation = nameRoute;
      this.backgroundComp();
    });
    /* End Change value routeLoaction for the Service */
  }

  ngOnDestroy() {
    /* Start Unsubscribe of services after usage */
    this.sidenavService.sidenav$.unsubscribe();
    this.sidenavService.transition$.unsubscribe();
    this.routeService.route$.unsubscribe();
    this.backgroundComp();
    /* End Unsubscribe of services after usage */
  }
}
