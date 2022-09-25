import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  modal$ = new EventEmitter<boolean>();

  constructor() {}
}
