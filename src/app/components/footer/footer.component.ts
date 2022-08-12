import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  /* Start Variables of Footer */
  myNameFooter = 'Isaac Arias';
  date = new Date();
  year = this.date.getFullYear();
  /* End Variables of Footer */

  constructor() {}

  ngOnInit(): void {}
}
