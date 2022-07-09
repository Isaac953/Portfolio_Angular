import { Component, OnInit, Input, NgZone } from '@angular/core';
import { SidenavService } from 'src/app/services/sidenav.service';

@Component({
  selector: '.app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  size: number = window.innerWidth;
  mensaje: string = 'Open';
  transition = 0.3;

  // constructor(private sidenavService: SidenavService) {}

  constructor(private sidenavService: SidenavService, ngZone: NgZone) {
    window.onresize = (e) => {
      ngZone.run(() => {
        this.transition = 0;
        this.size = window.innerWidth;
        console.log(this.mensaje);
        console.log(window.innerWidth);
      });
    };
  }

  ngOnInit() {
    this.sidenavService.sidenav$.subscribe((texto) => {
      this.mensaje = texto;
      console.log('navbar:', texto);
    });

    this.sidenavService.transition$.subscribe((transitionValue) => {
      this.transition = transitionValue;
      console.log('transition:', transitionValue);
    });
  }
}
