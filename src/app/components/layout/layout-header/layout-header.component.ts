import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-layout-header',
  templateUrl: './layout-header.component.html',
  styleUrls: ['./layout-header.component.css']
})
export class LayoutHeaderComponent implements OnInit {

  /*Start Button Header function*/
  @Output()
  mensajeHeader = new EventEmitter();

  sendMessage = true;

  clickToggle(){
      this.sendMessage = !this.sendMessage;
      this.mensajeHeader.emit(this.sendMessage);
  }
  /*End Button Header function*/

  constructor() { }
  ngOnInit(): void {
  }


}
