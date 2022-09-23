import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css'],
})
export class ProyectsComponent implements OnInit {
  /* Start Variables of Contact Component */
  title = 'Proyectos';
  proyectsClass: any;

  proyectsCards: any[] = [
    {
      coverProyect: 'Proyecto 1',
      titleButton: 'Ver Info',
    },
    {
      coverProyect: 'Proyecto 2',
      titleButton: 'Ver Info',
    },
    {
      coverProyect: 'Proyecto 3',
      titleButton: 'Ver Info',
    },
    // {
    //   titleCard: 'Proyecto 4',
    // },
    // {
    //   titleCard: 'Proyecto 5',
    // },
    // {
    //   titleCard: 'Proyecto 6',
    // },
  ];

  /* Start Function Send Route in MainContent */
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
  /* End Function Send Route in MainContent */

  /* End Variables of Contact Component */

  constructor() {}

  ngOnInit() {
    this.proyectsColumns();
  }
}
