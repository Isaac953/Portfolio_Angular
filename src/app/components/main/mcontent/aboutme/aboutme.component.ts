import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css'],
})
export class AboutmeComponent implements OnInit {
  /* Start Variables of About me Component */
  abouts: any[] = [
    {
      description: 'Parrafo 1',
    },
    {
      description: 'Parrafo 2',
    },
    {
      description: 'Parrafo 3',
    },
  ];
  /* End Variables of About me Component */

  constructor() {}

  ngOnInit(): void {}
}
