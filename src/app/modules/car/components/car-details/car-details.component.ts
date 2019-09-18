import { Component, OnInit, Input } from '@angular/core';
import { StarWarVehicle } from '../../../../models/star-war-vehicle';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  @Input() myCarDetail: StarWarVehicle;

  constructor() { }

  ngOnInit() {
  }

}
