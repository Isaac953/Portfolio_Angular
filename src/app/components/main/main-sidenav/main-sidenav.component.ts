import { Component, OnInit } from '@angular/core';
import { SidenavService } from 'src/app/services/sidenav.service';

@Component({
  selector: '.app-main-sidenav',
  templateUrl: './main-sidenav.component.html',
  styleUrls: ['./main-sidenav.component.css']
})
export class MainSidenavComponent implements OnInit {

  mensaje: string = 'Navbar!';

  constructor(private sidenavService: SidenavService ) { }

  ngOnInit() {
    this.sidenavService.sidenav$.subscribe( texto => {
      this.mensaje = texto;
      console.log('navbar:', texto);
    });
  }

}
