import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  sidenav$ = new EventEmitter<string>();

  constructor() { }
}
