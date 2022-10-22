import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import {
  faHtml5,
  faCss3Alt,
  faSass,
  faBootstrap,
  faJs,
  faAngular,
  faVuejs,
  faReact,
  faGithub,
  faNodeJs,
  faPhp,
  faLaravel,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css'],
})
export class ProyectsComponent implements OnInit {
  /* Start Variables of Contact Component */
  title = 'Proyectos';
  titleBtn = 'Ver proyecto';
  proyectsClass: any;
  modalSwitch: any;

  proyectTitle: any;

  proyectsCards: any[] = [
    {
      coverProyect: './assets/images/platzi_video/slide_1.jpg',
      titleProyect: 'Platzi Video',
      year: '2021',
      slides: [
        {
          proyect: './assets/images/platzi_video/slide_1.jpg',
          caption: 'Dashboard principal',
          dot: 1,
          activeDot: 'active-dot',
        },
        {
          proyect: './assets/images/platzi_video/slide_2.jpg',
          caption: 'Inicio de sesión',
          dot: 2,
          activeDot: '',
        },
        {
          proyect: './assets/images/platzi_video/slide_3.jpg',
          caption: 'Error 404',
          dot: 3,
          activeDot: '',
        },
        {
          proyect: './assets/images/platzi_video/slide_4.jpg',
          caption: 'Registro de usuario',
          dot: 4,
          activeDot: '',
        },
        {
          proyect: './assets/images/platzi_video/slide_5.jpg',
          caption: 'Carousel de imagenes',
          dot: 5,
          activeDot: '',
        },
      ],
      // slidesProyect: [
      //   './assets/images/platzi_video/slide_1.jpg',
      //   './assets/images/platzi_video/slide_2.jpg',
      //   './assets/images/platzi_video/slide_3.jpg',
      //   './assets/images/platzi_video/slide_4.jpg',
      //   './assets/images/platzi_video/slide_5.jpg',
      // ],
      // caption: [
      //   'Dashboard principal',
      //   'Inicio de sesión',
      //   'Error 404',
      //   'Registro de usuario',
      //   'Carousel de imagenes',
      // ],
      skills: [
        { logo: faHtml5, name: 'HTML', class: 'html5' },
        { logo: faCss3Alt, name: 'CSS', class: 'css3' },
        { logo: faSass, name: 'Sass', class: 'sass' },
        { logo: faGithub, name: 'Git/GitHub', class: 'git' },
      ],
      urlProyect: 'link 1',
      descriptionProyect:
        'Página web realizada con HTML5 y CSS3 en el curso de Frontend developer de Platzi con vistas de buscador de videos, carrusel de videos, login y registro de usuarios. Además con aprendizaje en el tema de maquetación web con Flexbox y CSS Grid.',
    },
    {
      coverProyect: './assets/images/pagina_de_matematicas/slide_1.jpg',
      titleProyect: 'Página de Matemáticas',
      year: '2021',
      slides: [
        {
          proyect: './assets/images/pagina_de_matematicas/slide_1.jpg',
          caption: 'Dashboard principal de la Aplicación web',
          dot: 1,
        },
        {
          proyect: './assets/images/pagina_de_matematicas/slide_2.jpg',
          caption: 'Taller #1: Figuras geométricas',
          dot: 2,
        },
      ],
      // slidesProyect: [
      //   './assets/images/pagina_de_matematicas/slide_1.jpg',
      //   './assets/images/pagina_de_matematicas/slide_2.jpg',
      //   'sin datos',
      //   'sin datos',
      //   'sin datos',
      // ],
      // caption: [
      //   'Dashboard principal de la Aplicación web',
      //   'Taller #1: Figuras geométricas',
      //   'sin datos',
      //   'sin datos',
      //   'sin datos',
      // ],
      skills: [
        { logo: faHtml5, name: 'HTML', class: 'html5' },
        { logo: faCss3Alt, name: 'CSS', class: 'css3' },
        { logo: faJs, name: 'JavaScript', class: 'javascript' },
        { logo: faGithub, name: 'Git/GitHub', class: 'git' },
      ],
      urlProyect: 'link 2',
      descriptionProyect:
        'Aplicación web realizada con HTML5, CSS3 y JavaScript en el curso práctico de JavaScript de Platzi con módulo de figuras geométricas; promedio, moda y mediana; y costos de salario implementando lo aprendido en los primeros dos módulos.',
    },
    {
      coverProyect: './assets/images/portafolio_angular/slide_1.jpg',
      titleProyect: 'Portafolio Profesional',
      year: '2022',
      slides: [
        {
          proyect: './assets/images/portafolio_angular/slide_1.jpg',
          caption: 'Página principal del Portafolio',
          dot: 1,
        },
      ],
      // slidesProyect: [
      //   './assets/images/portafolio_angular/slide_1.jpg',
      //   'sin datos',
      //   'sin datos',
      //   'sin datos',
      //   'sin datos',
      // ],
      // caption: [
      //   'Página principal del Portafolio',
      //   'sin datos',
      //   'sin datos',
      //   'sin datos',
      //   'sin datos',
      // ],
      skills: [
        { logo: faHtml5, name: 'HTML', class: 'html5' },
        { logo: faCss3Alt, name: 'CSS', class: 'css3' },
        { logo: faAngular, name: 'Angular', class: 'angular' },
        { logo: faGithub, name: 'Git/GitHub', class: 'git' },
      ],
      urlProyect: 'link 3',
      descriptionProyect:
        'Sitio web personal realizado en Angular para presentar mis proyectos realizados y ampliar más acerca de los servicios que ofrezco como programador web FullStack.',
    },
    // {
    //   titleProyect: 'Proyecto 4',
    // },
    // {
    //   titleProyect: 'Proyecto 5',
    // },
    // {
    //   titleProyect: 'Proyecto 6',
    // },
  ];

  /* Start Function define proyectsColumns */
  proyectsColumns = () => {
    switch (this.proyectsCards.length) {
      case 1:
        this.proyectsClass = 'columns1';
        break;
      case 2:
        this.proyectsClass = 'columns2';
        break;
      case 3:
        this.proyectsClass = 'columns3';
        break;
      default:
        this.proyectsClass = 'columns3';
    }
  };
  /* End Function define proyectsColumns */

  /* Start Function define openModal */
  openModal = (arr_names: string[]) => {
    this.proyectTitle = arr_names;
    this.modalSwitch = 'enabled';
    this.modalService.modal$.emit(this.modalSwitch);
    this.modalService.modalTitle$.emit(this.proyectTitle);
    window.scrollTo(0, 0);
  };
  /* End Function define openModal */

  /* End Variables of Contact Component */

  constructor(private modalService: ModalService) {}

  ngOnInit() {
    this.proyectsColumns();
  }
}
