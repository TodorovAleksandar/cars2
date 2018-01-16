import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { CarsComponent } from './components/cars-component/cars-component.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarServiceService } from "./services/car-service.service";

const appRoutes: Routes = [
  { path: 'cars', component: CarsComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    CarsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    CarServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
