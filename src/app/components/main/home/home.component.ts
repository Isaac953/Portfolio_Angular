import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  styles: any;

  covers: any[] = [
    {
      description: 'Hola Soy',
      styles: {
        color: 'var(--txt-color)',
        fontSize: '32px',
      },
    },
    {
      description: 'Isaac Arias',
      styles: {
        color: 'var(--txt-color)',
        fontWeight: 'bold',
        fontSize: '42px',
      },
    },
    {
      description: 'Full Stack Developer',
      styles: {
        backgroundColor: 'var(--cover-description)',
        color: 'var(--txt-color)',
        fontSize: '32px',
        fontWeight: 'bold',
        textShadow: 'var(--cover-shadow-rank)',
      },
    },
  ];
}
