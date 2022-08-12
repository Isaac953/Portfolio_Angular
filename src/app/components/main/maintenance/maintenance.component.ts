import { Component, OnInit } from '@angular/core';
import { faPenRuler } from '@fortawesome/free-solid-svg-icons';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css'],
})
export class MaintenanceComponent implements OnInit {
  /* Start Font Awesome icons*/
  faPenRuler = faPenRuler;
  /* End Font Awesome icons*/

  /* Start Variables of Maintenance Component */
  routeLocationOrigin = window.location.pathname;
  routeLoactionSearch = this.routeLocationOrigin.lastIndexOf('/');
  routeLocation = this.routeLocationOrigin.slice(this.routeLoactionSearch);

  componentName: any;
  /* End Variables of Maintenance Component */

  /* Start Function to assign name for the Components */
  ComponentDefault = () => {
    switch (true) {
      case this.routeLocation == '/home':
        this.componentName = 'Home Component';
        break;
      case this.routeLocation == '/about-me':
        this.componentName = 'About me Component';
        break;
      case this.routeLocation == '/services':
        this.componentName = 'Services Component';
        break;
      case this.routeLocation == '/skills':
        this.componentName = 'Skills Component';
        break;
      case this.routeLocation == '/proyects':
        this.componentName = 'Proyects Component';
        break;
      case this.routeLocation == '/contact':
        this.componentName = 'Contact Component';
        break;
      default:
        this.componentName = 'Home Component';
        break;
    }
  };
  /* End Function to assign name for the Components */

  constructor(private routeService: RouteService) {}

  ngOnInit() {
    this.ComponentDefault();

    /*Start Change value componentName for the Service */
    this.routeService.routeMessage$.subscribe((route) => {
      this.componentName = route;
    });
    /*End Change value componentName for the Service */
  }

  ngOnDestroy() {
    /* Start Unsubscribe of services after usage */
    this.ComponentDefault();
    /* End Unsubscribe of services after usage */
  }
}
