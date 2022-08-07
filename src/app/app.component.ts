import { Component, OnInit } from '@angular/core';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Portfolio_Angular';

  messageLayout: boolean = true;

  heightMain: any;

  routeLocationOrigin = window.location.pathname;
  routeLoactionSearch = this.routeLocationOrigin.lastIndexOf('/');
  routeLocation = this.routeLocationOrigin.slice(this.routeLoactionSearch);

  /* Function to assign Background for the Components */
  heightMainSize = () => {
    switch (true) {
      case this.routeLocation == '/home':
        this.heightMain = 'vh-home';
        break;
      case this.routeLocation == '/about-me':
        this.heightMain = 'vh-about-me';
        break;
      case this.routeLocation == '/services':
        this.heightMain = 'vh-services';
        break;
      case this.routeLocation == '/skills':
        this.heightMain = 'vh-skills';
        break;
      case this.routeLocation == '/proyects':
        this.heightMain = 'vh-proyects';
        break;
      case this.routeLocation == '/contact':
        this.heightMain = 'vh-contact';
        break;
      default:
        this.heightMain = 'vh-home';
        break;
    }
  };

  constructor(private routeService: RouteService) {}

  ngOnInit() {
    /* Change value routeLoaction for the Service */
    this.routeService.route$.subscribe((nameRoute) => {
      this.routeLocation = nameRoute;
      this.heightMainSize();
    });

    this.heightMainSize();
  }

  ngOnDestroy() {
    /*Unsubscribe of services after usage*/
    this.heightMainSize();
  }
}
