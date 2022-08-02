import { Component, OnInit } from '@angular/core';
import { faPenRuler } from '@fortawesome/free-solid-svg-icons';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css'],
})
export class MaintenanceComponent implements OnInit {
  /*Font Awesome icons*/
  faPenRuler = faPenRuler;

  routeLocationOrigin = window.location.pathname;
  routeLoactionSearch = this.routeLocationOrigin.lastIndexOf('/');
  routeLocation = this.routeLocationOrigin.slice(this.routeLoactionSearch);

  componentName: any;

  /* Function to assign Background for the Components */
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

  constructor(private routeService: RouteService) {}

  ngOnInit() {
    /* Change value componentName for the Service */
    this.routeService.routeMessage$.subscribe((route) => {
      this.componentName = route;
    });

    this.ComponentDefault();
  }

  ngOnDestroy() {
    /*Unsubscribe of services after usage*/
    this.ComponentDefault();
  }
}
