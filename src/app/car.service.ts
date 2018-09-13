import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Car } from './car';
import { CARS } from './mock-cars';


@Injectable({
  providedIn: 'root'
})
export class CarService {

	getCars(): Car[] {
  return CARS;
}

  constructor() { }
}
