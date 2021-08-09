import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/home/nav/nav.component';
import { CarsComponent } from './components/home/cars/cars.component';
import { CarComponent } from './components/home/cars/car/car.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    CarsComponent,
    CarComponent,

     ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
