import { Component, OnInit, Input, NgZone, Inject } from '@angular/core';
import { SidenavService } from 'src/app/services/sidenav.service';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: '.app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  size: number = window.innerWidth;
  mensaje: string = 'Open';
  transition = 0;
  // routeLocation = '/home';
  // routeLocation = window.location.pathname;

  // routeLocationOrigin = '/Portfolio_Angular/home';
  routeLocationOrigin = window.location.pathname;
  routeLoactionSearch = this.routeLocationOrigin.lastIndexOf('/');
  routeLocation = this.routeLocationOrigin.slice(this.routeLoactionSearch);

  // constructor(private sidenavService: SidenavService) {}

  constructor(
    private sidenavService: SidenavService,
    private routeService: RouteService,
    ngZone: NgZone
  ) {
    console.log(this.routeLocation);
    window.onresize = (e) => {
      ngZone.run(() => {
        this.transition = 0;
        this.size = window.innerWidth;
        console.log(this.mensaje);
        console.log(window.innerWidth);
      });
    };
  }

  ngOnInit() {
    /* Cambio de valor de variable para el sidenav por medio del servicio */
    this.sidenavService.sidenav$.subscribe((texto) => {
      this.mensaje = texto;
      console.log('navbar:', texto);
    });

    /* Cambio de valor de variable para controlar la transiciòn por medio del servicio */
    this.sidenavService.transition$.subscribe((transitionValue) => {
      this.transition = transitionValue;
      console.log('transition:', transitionValue);
    });

    /* Cambio de valor de variable para controlar la ruta de origen por medio del servicio */
    this.routeService.route$.subscribe((nameRoute) => {
      this.routeLocation = nameRoute;
      console.log('Route Component:', nameRoute);
    });
  }
}
