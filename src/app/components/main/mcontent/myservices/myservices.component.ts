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
      listCard: 'list 1',
    },
    {
      titleCard: 'Desarrollo',
      iconCard: faKeyboard,
      listCard: 'list 2',
    },
  ];
  /* End Variables of Services Component */

  constructor() {}

  ngOnInit(): void {}
}
