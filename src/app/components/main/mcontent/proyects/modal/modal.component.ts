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
  modalClass: any;
  /* End Variables of Modal Component */
  constructor(private modalService: ModalService) {}

  /* Start Function define openModal */
  closeModal = () => {
    this.modalSwitch = false;
    this.modalClass = 'disabled';
    setTimeout(() => {
      this.modalService.modal$.emit(this.modalSwitch);
      this.modalService.modalClass$.emit(this.modalClass);
    }, 200);
  };
  /* End Function define openModal */

  ngOnInit(): void {}
}
