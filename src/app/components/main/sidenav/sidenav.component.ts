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
  selector: '.app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  faUser = faUser;
  faCode = faCode;
  faPencilAlt = faPencilAlt;
  faBriefcase = faBriefcase;
  faCommentAlt = faCommentAlt;

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

  size: number = window.innerWidth;
  mensajeList: string = 'Open';
  nameRouteT: string = '';

  constructor(
    private sidenavService: SidenavService,
    private routeService: RouteService
  ) {}

  clickRoute(route: string) {
    this.nameRouteT = route;
    this.routeService.route$.emit(this.nameRouteT);
  }

  ngOnInit() {
    this.sidenavService.sidenav$.subscribe((texto) => {
      this.mensajeList = texto;
      console.log('navbar desde Component:', texto);
    });
  }
}
