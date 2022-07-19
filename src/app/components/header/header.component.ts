import { Component, OnInit } from '@angular/core';
import { faLaptopCode, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  /*Font Awesome icons*/
  faLaptopCode = faLaptopCode;
  faBars = faBars;

  myName = ' Isaac Arias';

  constructor() {}

  ngOnInit(): void {}
}
