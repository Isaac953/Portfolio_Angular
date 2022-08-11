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
  /*Start Font Awesome icons*/
  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;
  faHome = faHome;
  /*End Font Awesome icons*/

  navigationName: any;
  linkButtonBack: any;
  linkButtonNext: any;
  titleBack: any;
  titleNext: any;
  iconBack: any;
  iconNext: any;
  sendBack: any;
  sendNext: any;
  visibleBack: any;
  visibleNext: any;

  /*Start Variables Get Route*/
  routeLocationOrigin = window.location.pathname;
  routeLoactionSearch = this.routeLocationOrigin.lastIndexOf('/');
  routeLocation = this.routeLocationOrigin.slice(this.routeLoactionSearch);
  /*End Variables Get Route*/

  /* Start Function Get Route Navigation */
  getNavigationRoute = () => {
    switch (true) {
      case this.routeLocation == '/home':
        this.navigationName = 'Home';
        this.linkButtonBack = '/home';
        this.linkButtonNext = '/about-me';
        this.titleBack = 'Inicio';
        this.titleNext = 'Sobre mí';
        this.iconBack = faHome;
        this.iconNext = faArrowRight;
        this.visibleBack = true;
        this.visibleNext = false;
        break;
      case this.routeLocation == '/about-me':
        this.navigationName = 'About me';
        this.linkButtonBack = '/home';
        this.linkButtonNext = '/services';
        this.titleBack = 'Inicio';
        this.titleNext = 'Servicios';
        this.iconBack = faHome;
        this.iconNext = faArrowRight;
        this.visibleBack = false;
        this.visibleNext = false;
        break;
      case this.routeLocation == '/services':
        this.navigationName = 'Services';
        this.linkButtonBack = '/about-me';
        this.linkButtonNext = '/skills';
        this.titleBack = 'Sobre mí';
        this.titleNext = 'Habilidades';
        this.iconBack = faArrowLeft;
        this.iconNext = faArrowRight;
        this.visibleBack = false;
        this.visibleNext = false;
        break;
      case this.routeLocation == '/skills':
        this.navigationName = 'Skills';
        this.linkButtonBack = '/services';
        this.linkButtonNext = '/proyects';
        this.titleBack = 'Servicios';
        this.titleNext = 'Proyectos';
        this.iconBack = faArrowLeft;
        this.iconNext = faArrowRight;
        this.visibleBack = false;
        this.visibleNext = false;
        break;
      case this.routeLocation == '/proyects':
        this.navigationName = 'Proyects';
        this.linkButtonBack = '/skills';
        this.linkButtonNext = '/contact';
        this.titleBack = 'Habilidades';
        this.titleNext = 'Contacto';
        this.iconBack = faArrowLeft;
        this.iconNext = faArrowRight;
        this.visibleBack = false;
        this.visibleNext = false;
        break;
      case this.routeLocation == '/contact':
        this.navigationName = 'Contact';
        this.linkButtonBack = '/proyects';
        this.linkButtonNext = '/home';
        this.titleBack = 'Proyectos';
        this.titleNext = 'Inicio';
        this.iconBack = faArrowLeft;
        this.iconNext = faHome;
        this.visibleBack = false;
        this.visibleNext = false;
        break;
      default:
        this.navigationName = 'Home';
        this.linkButtonBack = '/home';
        this.linkButtonNext = '/about-me';
        this.titleBack = 'Inicio';
        this.titleNext = 'Sobre mí';
        this.iconBack = faHome;
        this.iconNext = faArrowRight;
        this.visibleBack = true;
        this.visibleNext = false;
        break;
    }
  };
  /* End Function Get Route Navigation */

  /* Start Function click back */
  clickBack(back: string) {
    this.sendBack = back;
    this.routeService.route$.emit(this.sendBack);
  }
  /* End Function click back */

  /* Start Function click next */
  clickNext(next: string) {
    this.sendNext = next;
    this.routeService.route$.emit(this.sendNext);
  }
  /* End Function click next */

  constructor(private routeService: RouteService) {}

  ngOnInit() {
    /* Change value routeLoaction for the Service */
    this.routeService.route$.subscribe((nameRoute) => {
      this.routeLocation = nameRoute;
      this.getNavigationRoute();
    });

    this.getNavigationRoute();
  }

  ngOnDestroy() {
    /*Unsubscribe of services after usage*/
    this.getNavigationRoute();
  }
}
