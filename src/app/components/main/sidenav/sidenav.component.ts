import { Component, OnInit } from '@angular/core';
import {
  faUser,
  faCode,
  faPencilAlt,
  faBriefcase,
  faCommentAlt,
} from '@fortawesome/free-solid-svg-icons';

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

  constructor() {}

  ngOnInit(): void {}
}
