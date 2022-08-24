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
      description: 'Isaac Arias',
      nameClass: 'cover__sp1',
    },
    {
      description: 'Full Stack Developer',
      nameClass: 'cover__sp2',
    },
  ];
  /* End Variables of Home Component */

  constructor() {}

  ngOnInit() {}
}
