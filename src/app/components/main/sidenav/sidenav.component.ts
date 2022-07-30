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

  navComponents: any[] = [
    {
      component: 'Sobre mí',
      route: '/about-me',
      icon: faUser,
    },
    {
      component: 'Servicios',
      route: '/services',
      icon: faCode,
    },
    {
      component: 'Habilidades',
      route: '/skills',
      icon: faPencilAlt,
    },
    {
      component: 'Proyectos',
      route: '/proyects',
      icon: faBriefcase,
    },
    {
      component: 'Contacto',
      route: '/contact',
      icon: faCommentAlt,
    },
  ];

  constructor(
    private sidenavService: SidenavService,
    private routeService: RouteService
  ) {}

  /* Function send Route in Main Content */
  clickRoute(route: string) {
    this.nameRoute = route;
    this.routeService.route$.emit(this.nameRoute);
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
