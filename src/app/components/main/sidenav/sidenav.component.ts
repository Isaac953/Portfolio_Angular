import { Component, OnInit } from '@angular/core';
import {
  faUser,
  faCode,
  faPencilAlt,
  faBriefcase,
  faCommentAlt,
} from '@fortawesome/free-solid-svg-icons';
import { SidenavService } from 'src/app/services/sidenav.service';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  faUser = faUser;
  faCode = faCode;
  faPencilAlt = faPencilAlt;
  faBriefcase = faBriefcase;
  faCommentAlt = faCommentAlt;

  itemOption = 'Open';

  nameRoute: any;
  nameComponent: any;

  navComponents: any[] = [
    {
      component: 'Sobre mí',
      route: '/about-me',
      icon: faUser,
      messageRoute: 'About me Component',
    },
    {
      component: 'Servicios',
      route: '/services',
      icon: faCode,
      messageRoute: 'Services Component',
    },
    {
      component: 'Habilidades',
      route: '/skills',
      icon: faPencilAlt,
      messageRoute: 'Skills Component',
    },
    {
      component: 'Proyectos',
      route: '/proyects',
      icon: faBriefcase,
      messageRoute: 'Proyects Component',
    },
    {
      component: 'Contacto',
      route: '/contact',
      icon: faCommentAlt,
      messageRoute: 'Contact Component',
    },
  ];

  constructor(
    private sidenavService: SidenavService,
    private routeService: RouteService
  ) {}

  /* Function send Route in Main Content */
  clickRoute(route: string, component: string) {
    this.nameRoute = route;
    this.nameComponent = component;
    this.routeService.route$.emit(this.nameRoute);
    this.routeService.routeMessage$.emit(this.nameComponent);
  }

  ngOnInit() {
    /* Change value itemOption for the Service */
    this.sidenavService.sidenav$.subscribe((status) => {
      this.itemOption = status;
      console.log('navbar:', status);
    });
  }

  ngOnDestroy() {
    /*Unsubscribe of services after usage*/
    this.sidenavService.sidenav$.unsubscribe();
  }
}
