import { StarWarVehicle } from '../../../../models/star-war-vehicle';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { StarwarsService } from '../../../../services/starwars.service';
import { HttpErrorResponse } from '@angular/common/http';

import { Subscription } from 'rxjs';
import 'rxjs/add/operator/first';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})

export class CarComponent implements OnInit, OnDestroy {

  myStarWarVehicles: StarwarsService[];
  subscriptionGetVehicles: Subscription; // para desuscribirse luego de enganchar el servicio

  selectedCar: StarWarVehicle;

  constructor(private starwarService: StarwarsService) {

   }

  ngOnInit() {
   this.getStarWarsVehicles();
  }


  //Return all vehicles
  getStarWarsVehicles(){
    this.subscriptionGetVehicles = this.starwarService.getVehicles().subscribe(
      data =>{
        this.myStarWarVehicles= data['results'];
      },
      (err: HttpErrorResponse)=>{
        if (err.error instanceof Error){
          console.log('Ha ocurrido un error ', err.error.message);
        }
        else {
          console.log(`El servidor ha devuelto un codigo ${err.status}, con el argumento: ${err.error}`);
        }
      }
     );
  }

  selectVehicle(vehicle: StarWarVehicle){
    this.starwarService.getVehicle(vehicle).first().subscribe(data=>{
     this.selectedCar= data;
    },
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error){
        console.log('Ha ocurrido un error ', err.error.message);
      }
      else {
        console.log(`El servidor ha devuelto un codigo ${err.status}, con el argumento: ${err.error}`);
      }
    }
    );

  }


  ngOnDestroy(): void {
   this.myStarWarVehicles= [];
   this.subscriptionGetVehicles.unsubscribe();

  }

}
