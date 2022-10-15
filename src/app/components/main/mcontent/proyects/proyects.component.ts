import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

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
      slidesProyect: [
        './assets/images/platzi_video/slide_1.jpg',
        './assets/images/platzi_video/slide_2.jpg',
        './assets/images/platzi_video/slide_3.jpg',
        './assets/images/platzi_video/slide_4.jpg',
        './assets/images/platzi_video/slide_5.jpg',
      ],
      caption: [
        'Dashboard principal',
        'Inicio de sesión',
        'Error 404',
        'Registro de usuario',
        'Carousel de imagenes',
      ],
      skillsProyect: 'Skills 1',
      urlProyect: 'link 1',
      descriptionProyect:
        'Página web realizada con HTML5 y CSS3 en el curso de Frontend developer de Platzi con vistas de buscador de videos, carrusel de videos, login y registro de usuarios. Además con aprendizaje en el tema de maquetación web con Flexbox y CSS Grid.',
    },
    {
      coverProyect: './assets/images/pagina_de_matematicas/slide_1.jpg',
      titleProyect: 'Página de Matemáticas',
      slidesProyect: [
        './assets/images/pagina_de_matematicas/slide_1.jpg',
        './assets/images/pagina_de_matematicas/slide_2.jpg',
        'sin datos',
        'sin datos',
        'sin datos',
      ],
      caption: [
        'Dashboard principal de la Aplicación web',
        'Taller #1: Figuras geométricas',
        'sin datos',
        'sin datos',
        'sin datos',
      ],
      skillsProyect: 'Skills 2',
      urlProyect: 'link 2',
      descriptionProyect:
        'Aplicación web realizada con HTML5, CSS3 y JavaScript en el curso práctico de JavaScript de Platzi con módulo de figuras geométricas; promedio, moda y mediana; y costos de salario implementando lo aprendido en los primeros dos módulos.',
    },
    {
      coverProyect: './assets/images/portafolio_angular/slide_1.jpg',
      titleProyect: 'Portafolio Profesional',
      slidesProyect: [
        './assets/images/portafolio_angular/slide_1.jpg',
        'sin datos',
        'sin datos',
        'sin datos',
        'sin datos',
      ],
      caption: [
        'Página principal del Portafolio',
        'sin datos',
        'sin datos',
        'sin datos',
        'sin datos',
      ],
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
