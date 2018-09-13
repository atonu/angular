import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { CARS } from '../mock-cars';
import { CarService } from '../car.service';

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

  cars : Car[];

  selectedCar: Car;

  Menu = "close";

  constructor(private carService: CarService) { }

  ngOnInit() {
  this.getCars();
}

  getCars(): void {
  this.cars = this.carService.getCars();
}

  onSelect(car: Car): void {
  this.selectedCar = car;
}

  menuSelect(menu): void {
  this.Menu = menu;
}




}
