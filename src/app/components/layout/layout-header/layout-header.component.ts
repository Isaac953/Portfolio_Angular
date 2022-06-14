import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-layout-header',
  templateUrl: './layout-header.component.html',
  styleUrls: ['./layout-header.component.css']
})
export class LayoutHeaderComponent implements OnInit {


  @Output()
  mensajeHeader = new EventEmitter();

  sendMessage = "Prueba de Header a Padre";

  clickToggle(){
    this.mensajeHeader.emit(this.sendMessage);
  }


  constructor() { }
  ngOnInit(): void {
  }


}
