import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css'],
})
export class ProyectsComponent implements OnInit {
  /* Start Variables of Contact Component */
  title = 'Proyectos';
  proyectsClass: any;
  modalSwitch: any;

  proyectsCards: any[] = [
    {
      coverProyect: 'Proyecto 1',
      titleButton: 'Ver Info',
    },
    {
      coverProyect: 'Proyecto 2',
      titleButton: 'Ver Info',
    },
    {
      coverProyect: 'Proyecto 3',
      titleButton: 'Ver Info',
    },
    // {
    //   titleCard: 'Proyecto 4',
    // },
    // {
    //   titleCard: 'Proyecto 5',
    // },
    // {
    //   titleCard: 'Proyecto 6',
    // },
  ];

  /* Start Function define proyectsColumns */
  proyectsColumns = () => {
    switch (this.proyectsCards.length) {
      case 1:
        this.proyectsClass = 'columns1';
        break;
      case 2:
        this.proyectsClass = 'columns2';
        break;
      case 3:
        this.proyectsClass = 'columns3';
        break;
      default:
        this.proyectsClass = 'columns3';
    }
  };
  /* End Function define proyectsColumns */

  /* Start Function define openModal */
  openModal = () => {
    this.modalSwitch = 'enabled';
    this.modalService.modal$.emit(this.modalSwitch);
  };
  /* End Function define openModal */

  /* End Variables of Contact Component */

  constructor(private modalService: ModalService) {}

  ngOnInit() {
    this.proyectsColumns();
  }
}
