import { Injectable } from '@angular/core';
import { CarsComponent } from '../components/cars-component/cars-component.component';


@Injectable()
export class CarServiceService {
  cars;
  constructor() {
    this.cars = [
      {
      id: 1,
      mark: 'bmw',
      model: 'neki',
      year: 2000,
      maxSpeed:250,
      isAutomatic: 'yes',
      engine:'dizel',
      numberOfDoors: 5,
    }
  ];
}
     public getCars(){
      return this.cars;
    }
   }


