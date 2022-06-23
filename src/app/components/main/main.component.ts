import { Component, OnInit, Input } from '@angular/core';
import { SidenavService } from 'src/app/services/sidenav.service';

@Component({
  selector: '.app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  mensaje: string = 'Open';

  constructor(private sidenavService: SidenavService) {}

  ngOnInit() {
    this.sidenavService.sidenav$.subscribe((texto) => {
      this.mensaje = texto;
      console.log('navbar:', texto);
    });
  }
}
