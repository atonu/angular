import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { CARS } from '../mock-cars';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

	car: Car = {
    id: 1,
    name: 'Audi'
  };

  cars=CARS;

  selectedCar: Car;

  Menu = "close";

  constructor() { }

  ngOnInit() {
  }

  onSelect(car: Car): void {
  this.selectedCar = car;
}

  menuSelect(menu): void {
  this.Menu = menu;
}




}
