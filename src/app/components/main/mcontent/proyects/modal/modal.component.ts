import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  /* Start Variables of Modal Component */
  modalSwitch: any;
  /* End Variables of Modal Component */
  constructor(private modalService: ModalService) {}

  /* Start Function define openModal */
  closeModal = () => {
    this.modalSwitch = 'disabled';
    setTimeout(() => {
      this.modalService.modal$.emit(this.modalSwitch);
    }, 200);
  };
  /* End Function define openModal */

  ngOnInit() {
    /* Start Change value modalSwitch for the Service */
    this.modalService.modal$.subscribe((modalValue) => {
      setTimeout(() => {
        this.modalSwitch = modalValue;
      }, 200);
    });
    /* End Change value modalSwitch for the Service */
  }
}
