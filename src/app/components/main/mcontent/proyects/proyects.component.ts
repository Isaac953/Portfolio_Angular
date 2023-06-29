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
    // {
    //   coverProyect: './assets/images/pagina_de_matematicas/slide_1.jpg',
    //   titleProyect: 'Página de Matemáticas',
    //   year: '2021',
    //   slides: [
    //     {
    //       proyect: './assets/images/pagina_de_matematicas/slide_1.jpg',
    //       caption: 'Dashboard principal de la Aplicación web',
    //       dot: 1,
    //       activeDot: 'active-dot',
    //     },
    //     {
    //       proyect: './assets/images/pagina_de_matematicas/slide_2.jpg',
    //       caption: 'Taller #1: Figuras geométricas',
    //       dot: 2,
    //       activeDot: '',
    //     },
    //   ],
    //   skills: [
    //     { logo: faHtml5, name: 'HTML', class: 'html5' },
    //     { logo: faCss3Alt, name: 'CSS', class: 'css3' },
    //     { logo: faJs, name: 'JavaScript', class: 'javascript' },
    //     { logo: faGithub, name: 'Git/GitHub', class: 'git' },
    //   ],
    //   urlProyect: 'https://isaac953.github.io/platzi-curso-practico-javascript/',
    //   descriptionProyect:
    //     'Aplicación web realizada con HTML5, CSS3 y JavaScript en el curso práctico de JavaScript de Platzi con módulo de figuras geométricas; promedio, moda y mediana; y costos de salario implementando lo aprendido en los primeros dos módulos.',
    // },

    {
      coverProyect: './assets/images/portafolio_angular/slide_1.jpg',
      titleProyect: 'Portafolio Profesional',
      year: '2022',
      slides: [
        {
          proyect: './assets/images/portafolio_angular/slide_1.jpg',
          caption: 'Página principal del Portafolio',
          dot: 1,
          activeDot: 'active-dot',
        },
        {
          proyect: './assets/images/portafolio_angular/slide_2.jpg',
          caption: 'Sección sobre mí',
          dot: 2,
          activeDot: '',
        },
        {
          proyect: './assets/images/portafolio_angular/slide_3.jpg',
          caption: 'Sección de servicios',
          dot: 3,
          activeDot: '',
        },
        {
          proyect: './assets/images/portafolio_angular/slide_4.jpg',
          caption: 'Sección de habilidades',
          dot: 4,
          activeDot: '',
        },
        {
          proyect: './assets/images/portafolio_angular/slide_5.jpg',
          caption: 'Sección de proyectos',
          dot: 5,
          activeDot: '',
        },
        {
          proyect: './assets/images/portafolio_angular/slide_6.jpg',
          caption: 'Detalles del proyecto realizado',
          dot: 6,
          activeDot: '',
        },
        {
          proyect: './assets/images/portafolio_angular/slide_7.jpg',
          caption: 'Sección de contacto',
          dot: 7,
          activeDot: '',
        },
      ],
      skills: [
        { logo: faHtml5, name: 'HTML', class: 'html5' },
        { logo: faCss3Alt, name: 'CSS', class: 'css3' },
        { logo: faAngular, name: 'Angular', class: 'angular' },
        { logo: faGithub, name: 'Git/GitHub', class: 'git' },
        // {
        //   logoRoute: './assets/icons/python_icon.png',
        //   name: 'Python',
        //   class: 'python',
        // },
      ],
      urlProyect: 'https://isaac953.github.io/Portfolio_Angular/home',
      descriptionProyect:
        'Sitio web personal realizado en Angular para presentar mis proyectos realizados y ampliar más acerca de los servicios que ofrezco como programador web FullStack.',
    },

    {
      coverProyect: './assets/images/platzi_video/slide_1.JPG',
      titleProyect: 'Platzi Video',
      year: '2023',
      slides: [
        {
          proyect: './assets/images/platzi_video/slide_1.JPG',
          caption: 'Dashboard principal',
          dot: 1,
          activeDot: 'active-dot',
        },
        {
          proyect: './assets/images/platzi_video/slide_2.JPG',
          caption: 'Registro de usuario',
          dot: 2,
          activeDot: '',
        },
        {
          proyect: './assets/images/platzi_video/slide_3.JPG',
          caption: 'Inicio de sesión',
          dot: 3,
          activeDot: '',
        },
        {
          proyect: './assets/images/platzi_video/slide_4.JPG',
          caption: 'Error 404',
          dot: 4,
          activeDot: '',
        },
        {
          proyect: './assets/images/platzi_video/slide_5.JPG',
          caption: 'Buscador',
          dot: 5,
          activeDot: '',
        },
        {
          proyect: './assets/images/platzi_video/slide_6.JPG',
          caption: 'Carousel de peliculas',
          dot: 6,
          activeDot: '',
        },
      ],
      skills: [
        { logo: faHtml5, name: 'HTML', class: 'html5' },
        { logo: faCss3Alt, name: 'CSS', class: 'css3' },
        { logo: faAngular, name: 'Angular', class: 'angular' },
        { logo: faBootstrap, name: 'Bootstrap', class: 'bootstrap' },
        { logo: faGithub, name: 'Git/GitHub', class: 'git' },
      ],
      urlProyect: 'https://isaac953.github.io/Platzi_Video/home',
      descriptionProyect:
        'Página web realizada con HTML5, CSS3 para el curso de Frontend developer de Platzi, con mejoras adicionales en Angular y Boostrap. Cuenta con vistas de buscador de videos, carrusel de videos, error 404, login y registro de usuarios. Además conseguir un aprendizaje en el tema de maquetación web con Flexbox y CSS Grid.',
    },

    {
      coverProyect: './assets/images/platzi_movies/slide_1.JPG',
      titleProyect: 'Platzi Movies',
      year: '2023',
      slides: [
        {
          proyect: './assets/images/platzi_movies/slide_1.JPG',
          caption: 'Dashboard principal',
          dot: 1,
          activeDot: 'active-dot',
        },
        {
          proyect: './assets/images/platzi_movies/slide_2.JPG',
          caption: 'Información de pelicula y sus boletos disponibles',
          dot: 2,
          activeDot: '',
        },
      ],
      skills: [
        { logo: faHtml5, name: 'HTML', class: 'html5' },
        { logo: faCss3Alt, name: 'CSS', class: 'css3' },
        { logo: faAngular, name: 'Angular', class: 'angular' },
        { logo: faBootstrap, name: 'Bootstrap', class: 'bootstrap' },
        { logo: faGithub, name: 'Git/GitHub', class: 'git' },
      ],
      urlProyect: 'https://isaac953.github.io/Platzi_Movies/',
      descriptionProyect:
        'Aplicación web realizada en Angular 13 en base al curso de Frameworks y Librerías de JavaScript en Platzi, para la ver cuantos boletos hay disponibles en las peliculas.',
    },

    {
      coverProyect: './assets/images/elgradosv/slide_2.PNG',
      titleProyect: 'ElGradoSV',
      year: '2023',
      slides: [
        {
          proyect: './assets/images/elgradosv/slide_1.PNG',
          caption: 'Componente Login',
          dot: 1,
          activeDot: 'active-dot',
        },
        {
          proyect: './assets/images/elgradosv/slide_2.PNG',
          caption: 'Dashboard de Estudiante',
          dot: 2,
          activeDot: '',
        },
        {
          proyect: './assets/images/elgradosv/slide_3.PNG',
          caption: 'Perfil de Estudiante',
          dot: 3,
          activeDot: '',
        },
        {
          proyect: './assets/images/elgradosv/slide_4.PNG',
          caption: 'Contenido de Estudiante',
          dot: 4,
          activeDot: '',
        },
        {
          proyect: './assets/images/elgradosv/slide_5.PNG',
          caption: 'Información de contenido',
          dot: 5,
          activeDot: '',
        },
        {
          proyect: './assets/images/elgradosv/slide_6.PNG',
          caption: 'Dashboard de Profesor',
          dot: 6,
          activeDot: '',
        },
        {
          proyect: './assets/images/elgradosv/slide_7.PNG',
          caption: 'Gestión de contenido Profesor',
          dot: 7,
          activeDot: '',
        },
        {
          proyect: './assets/images/elgradosv/slide_8.PNG',
          caption: 'Formulario para ingresar, ver, modificar y eliminar contenido',
          dot: 8,
          activeDot: '',
        },
        {
          proyect: './assets/images/elgradosv/slide_9.PNG',
          caption: 'Programadores del proyecto',
          dot: 9,
          activeDot: '',
        },
      ],
      skills: [
        { logo: faHtml5, name: 'HTML', class: 'html5' },
        { logo: faCss3Alt, name: 'CSS', class: 'css3' },
        { logo: faAngular, name: 'Angular', class: 'angular' },
        { logo: faBootstrap, name: 'Bootstrap', class: 'bootstrap' },
        { logo: faGithub, name: 'Git/GitHub', class: 'git' },
        { logoRoute: './assets/icons/python_icon.png', name: 'Python', class: 'python' },
        { logoRoute: './assets/icons/django_icon.png', name: 'Django', class: 'django' },
        { logoRoute: './assets/icons/postgress_icon.png', name: 'PostgreSQL', class: 'postgresql' },
      ],
      urlProyect: 'https://isaac953.github.io/Portal_Estudiantes/login',
      descriptionProyect:
        'Aplicación web de un portal de estudiantes ElGradoSV realizada con Frontend Angular, Backend Python-Django, base de datos PostgreSQL, y adicionalmente la dockerización del mismo, como parte del Hackathon Challenge 2023 de FEDISAL-FORMAS para el evento final del proyecto Upskilling & Reskilling.'
    },

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

  constructor(private modalService: ModalService) { }

  ngOnInit() {
    this.proyectsColumns();
  }
}
