import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  /* Start Variables of Home Component */
  covers: any[] = [
    {
      description: 'Hola Soy',
      nameClass: 'home__cover--sp1',
    },
    {
      description: 'Isaac Arias',
      nameClass: 'home__cover--sp2',
    },
    {
      description: 'Full Stack Developer',
      nameClass: 'home__cover--sp3',
    },
  ];
  /* End Variables of Home Component */

  constructor() {}

  ngOnInit(): void {}
}
