import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';

const routes: Routes = [
  { path: '', component: CarComponent, children: [
      { path: 'car-details/:id', component: CarDetailsComponent }
    ]
  },

];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class CarRoutingModule {}
