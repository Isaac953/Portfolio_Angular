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
  sidenavStatus = 'Open';
  sidenavTransition = 0;
  sizeDisplay = window.innerWidth;

  routeLocationOrigin = window.location.pathname;
  routeLoactionSearch = this.routeLocationOrigin.lastIndexOf('/');
  routeLocation = this.routeLocationOrigin.slice(this.routeLoactionSearch);

  componentImg: any;

  /*onResize Function*/
  onResize(event: any) {
    this.sidenavTransition = 0;
  }

  /* Function to assign Background for the Components */
  backgroundComp = () => {
    switch (true) {
      case this.routeLocation == '/home':
        this.componentImg = '#206a5d';
        break;
      case this.routeLocation == '/about-me':
        this.componentImg = '#EF5B0C';
        break;
      case this.routeLocation == '/services':
        this.componentImg = '#395B64';
        break;
      case this.routeLocation == '/skills':
        this.componentImg = '#3AB4F2';
        break;
      case this.routeLocation == '/proyects':
        this.componentImg = '#C32BAD';
        break;
      case this.routeLocation == '/contact':
        this.componentImg = '#FF5DA2';
        break;
      default:
        this.componentImg = '#206a5d';
        break;
    }
  };

  constructor(
    private sidenavService: SidenavService,
    private routeService: RouteService
  ) {}

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

    /* Change value routeLoaction for the Service */
    this.routeService.route$.subscribe((nameRoute) => {
      this.routeLocation = nameRoute;
      this.backgroundComp();
      console.log('Route Component:', nameRoute);
    });

    this.backgroundComp();
  }

  ngOnDestroy() {
    /*Unsubscribe of services after usage*/
    this.sidenavService.sidenav$.unsubscribe();
    this.sidenavService.transition$.unsubscribe();
    this.routeService.route$.unsubscribe();
    this.backgroundComp();
  }
}
