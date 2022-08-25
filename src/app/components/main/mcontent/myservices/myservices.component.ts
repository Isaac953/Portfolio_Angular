import { Component, OnInit } from '@angular/core';
import { faChartPie, faKeyboard } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-myservices',
  templateUrl: './myservices.component.html',
  styleUrls: ['./myservices.component.css'],
})
export class MyservicesComponent implements OnInit {
  /* Start Variables of Services Component */
  title = 'Servicios';

  servicesCards: any[] = [
    {
      titleCard: 'Diseño',
      iconCard: faChartPie,
      listCard: [
        { item: 'Acceso y Registro de usuarios.' },
        { item: 'Formularios bien estructurados.' },
        { item: 'Módulo para mantenimiento de datos.' },
        { item: 'Módulo de gestión de inventario.' },
        { item: 'Módulo de Dashboard con gráficos, filtros y contadores.' },
        { item: 'Módulo de reporteria con filtrado de datos.' },
        { item: 'Adaptar diseños con diferentes tamaños para dispositivo.' },
        {
          item: 'Utilizar paletas de colores brindadas para su sitio o aplicación web.',
        },
        { item: 'Diseño de Logotipos y barras de navegación.' },
      ],
    },
    {
      titleCard: 'Desarrollo',
      iconCard: faKeyboard,
      listCard: [
        { item: 'Diagrama de caso de uso.' },
        { item: 'Diagrama de base de datos.' },
        { item: 'Migración de datos desde un archivo CSV.' },
        { item: 'Funciones para mostrar mensajes al usuario.' },
        { item: 'Funciones para registro de datos.' },
        { item: 'Funciones para validar actividades por roles de usuario.' },
        { item: 'Funciones matemáticas para realizar calculos y operaciones.' },
        { item: 'Exportar reportes desde formulario en PDF y Excel.' },
      ],
    },
  ];
  /* End Variables of Services Component */

  constructor() {}

  ngOnInit(): void {}
}
