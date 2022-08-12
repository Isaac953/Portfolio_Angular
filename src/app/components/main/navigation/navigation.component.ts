import { Component, OnInit } from '@angular/core';
import { RouteService } from 'src/app/services/route.service';
import {
  faArrowRight,
  faArrowLeft,
  faHome,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  /* Start Font Awesome icons */
  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;
  faHome = faHome;
  /* End Font Awesome icons */

  /* Start Variables of Navigation Component */
  navigationV: any;

  sendBack: any;
  sendNext: any;

  routeLocationOrigin = window.location.pathname;
  routeLoactionSearch = this.routeLocationOrigin.lastIndexOf('/');
  routeLocation = this.routeLocationOrigin.slice(this.routeLoactionSearch);
  /* End of Navigation Component */

  /* Start Function Get Route Navigation */
  getNavigationRoute = () => {
    switch (true) {
      case this.routeLocation == '/home':
        this.navigationV = {
          navigationName: 'Home',
          linkButtonBack: '/home',
          linkButtonNext: '/about-me',
          titleBack: 'Inicio',
          titleNext: 'Sobre mí',
          iconBack: faHome,
          iconNext: faArrowRight,
          visibleBack: true,
          visibleNext: false,
          flexBack: 'backhome',
          flexNext: 'next',
        };
        break;
      case this.routeLocation == '/about-me':
        this.navigationV = {
          navigationName: 'About me',
          linkButtonBack: '/home',
          linkButtonNext: '/services',
          titleBack: 'Inicio',
          titleNext: 'Servicios',
          iconBack: faHome,
          iconNext: faArrowRight,
          visibleBack: false,
          visibleNext: false,
          flexBack: 'back',
          flexNext: 'next',
        };
        break;
      case this.routeLocation == '/services':
        this.navigationV = {
          navigationName: 'Services',
          linkButtonBack: '/about-me',
          linkButtonNext: '/skills',
          titleBack: 'Sobre mí',
          titleNext: 'Habilidades',
          iconBack: faArrowLeft,
          iconNext: faArrowRight,
          visibleBack: false,
          visibleNext: false,
          flexBack: 'back',
          flexNext: 'next',
        };
        break;
      case this.routeLocation == '/skills':
        this.navigationV = {
          navigationName: 'Skills',
          linkButtonBack: '/services',
          linkButtonNext: '/proyects',
          titleBack: 'Servicios',
          titleNext: 'Proyectos',
          iconBack: faArrowLeft,
          iconNext: faArrowRight,
          visibleBack: false,
          visibleNext: false,
          flexBack: 'back',
          flexNext: 'next',
        };
        break;
      case this.routeLocation == '/proyects':
        this.navigationV = {
          navigationName: 'Proyects',
          linkButtonBack: '/skills',
          linkButtonNext: '/contact',
          titleBack: 'Habilidades',
          titleNext: 'Contacto',
          iconBack: faArrowLeft,
          iconNext: faArrowRight,
          visibleBack: false,
          visibleNext: false,
          flexBack: 'back',
          flexNext: 'next',
        };
        break;
      case this.routeLocation == '/contact':
        this.navigationV = {
          navigationName: 'Contact',
          linkButtonBack: '/proyects',
          linkButtonNext: '/home',
          titleBack: 'Proyectos',
          titleNext: 'Inicio',
          iconBack: faArrowLeft,
          iconNext: faHome,
          visibleBack: false,
          visibleNext: false,
          flexBack: 'back',
          flexNext: 'next',
        };
        break;
      default:
        this.navigationV = {
          navigationName: 'Home',
          linkButtonBack: '/home',
          linkButtonNext: '/about-me',
          titleBack: 'Inicio',
          titleNext: 'Sobre mí',
          iconBack: faHome,
          iconNext: faArrowRight,
          visibleBack: true,
          visibleNext: false,
          flexBack: 'backhome',
          flexNext: 'next',
        };
        break;
    }
  };
  /* End Function Get Route Navigation */

  /* Start Function click back */
  clickBack = (back: string) => {
    this.sendBack = back;
    this.routeService.route$.emit(this.sendBack);
  };
  /* End Function click back */

  /* Start Function click next */
  clickNext = (next: string) => {
    this.sendNext = next;
    this.routeService.route$.emit(this.sendNext);
  };
  /* End Function click next */

  constructor(private routeService: RouteService) {}

  ngOnInit() {
    this.getNavigationRoute();

    /* Start Change value routeLoaction for the Service */
    this.routeService.route$.subscribe((nameRoute) => {
      this.routeLocation = nameRoute;
      this.getNavigationRoute();
    });
    /* End Change value routeLoaction for the Service */
  }

  ngOnDestroy() {
    /* Start Unsubscribe of services after usage */
    this.getNavigationRoute();
    /* End Unsubscribe of services after usage */
  }
}
