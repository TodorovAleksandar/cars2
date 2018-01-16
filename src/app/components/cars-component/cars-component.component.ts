import { Component, OnInit } from '@angular/core';
import { CarServiceService  } from '../../services/car-service.service';


@Component({
 selector: 'app-cars',
 templateUrl: './cars.component.html',
 styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

 cars = [];

 constructor(private _carsService: CarServiceService ) {
   this.cars = this._carsService.getCars();
 }

 ngOnInit() {
 }

}