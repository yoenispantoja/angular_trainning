import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarComponent } from './components/car/car.component';
import { CarDetailsComponent } from '../car/components/car-details/car-details.component';
import { CarRoutingModule } from '../car/car.routing';
import { StarwarsService } from '../../services/starwars.service';
import { SharedModulesModule } from '../shared-modules/shared-modules.module';

@NgModule({
  imports: [
    CommonModule,
    CarRoutingModule,
    SharedModulesModule

  ],
  declarations: [
    CarComponent,
    CarDetailsComponent
  ],
  providers: [
    StarwarsService
  ]
})
export class CarModule { }
