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
  /* Start Font Awesome icons */
  faUser = faUser;
  faCode = faCode;
  faPencilAlt = faPencilAlt;
  faBriefcase = faBriefcase;
  faCommentAlt = faCommentAlt;
  /* End Font Awesome icons */

  /* Start Variables of Sidenav Component */
  itemOption = 'Open';

  nameRoute: any;
  nameComponent: any;

  sidenavTransition = 0;
  /* End Variables of Sidenav Component */

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

  /* Start Function send Route in Main Content */
  clickRoute = (route: string, component: string) => {
    this.nameRoute = route;
    this.nameComponent = component;
    this.routeService.route$.emit(this.nameRoute);
    this.routeService.routeMessage$.emit(this.nameComponent);
    this.sidenavService.transition$.emit(this.sidenavTransition);
  };
  /* End Function send Route in Main Content */

  ngOnInit() {
    /* Start Change value itemOption for the Service */
    this.sidenavService.sidenav$.subscribe((status) => {
      this.itemOption = status;
    });
    /* End Change value itemOption for the Service */
  }

  ngOnDestroy() {
    /* Start Unsubscribe of services after usage*/
    this.sidenavService.sidenav$.unsubscribe();
    /* End Unsubscribe of services after usage*/
  }
}
