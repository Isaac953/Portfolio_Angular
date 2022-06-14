import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-layout-sidenav',
  templateUrl: './layout-sidenav.component.html',
  styleUrls: ['./layout-sidenav.component.css']
})
export class LayoutSidenavComponent implements OnInit {

  @Input() messageSidenav: string = "";


  constructor() {

  }


  ngOnInit(): void {
  }

}
