import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RouteService {
  route$ = new EventEmitter<string>();

  constructor() {}
}
