import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css'],
})
export class AboutmeComponent implements OnInit {
  /* Start Variables of About me Component */
  title = 'Sobre Mí';
  abouts: any[] = [
    {
      description:
        'Mi Nombre es Isaac Arias soy Ingeniero en Sistemas y Computación, cuento con experiencia como Desarrollador Web y también como programador para aplicaciones de escritorio.',
      class: 'd1',
    },
    {
      description:
        'Me gusta mucho trabajar en base a objetivos y también brindar soluciones a los problemas por medio de la toma de requerimientos, diagramas de bases de datos, agendar los productos para cada entrega y por último validar que todo tenga el funcionamiento acordado por el cliente.',
      class: 'd2',
    },
    {
      description:
        'He brindado soluciones para ONG y Empresas de ámbito industrial y tecnológicas desde aplicaciones que registren de datos, roles de usuarios, llevar el control de inventario, facturación y cotizaciones; y por último generar reportes de tipo cuadro y gráficos.',
      class: 'd3',
    },
  ];
  /* End Variables of About me Component */

  constructor() {}

  ngOnInit(): void {}
}
