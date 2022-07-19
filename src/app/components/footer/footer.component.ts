import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  myNameFooter = 'Isaac Arias';
  date = new Date();
  year = this.date.getFullYear();

  constructor() {}

  ngOnInit(): void {}
}
