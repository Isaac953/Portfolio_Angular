import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RouteService {
  route$ = new EventEmitter<string>();
  routeMessage$ = new EventEmitter<string>();

  constructor() {}
}
