import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { StarWarVehicle } from '../models/star-war-vehicle';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};


@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  url = 'https://swapi.co/api/vehicles/';

  constructor(private http: HttpClient) { }

//Return all vehicles
getVehicles(): Observable <StarWarVehicle []>{
  return this.http.get<StarWarVehicle[]>(this.url + '?format=json', httpOptions);
}

//Return a specific vehicle
getVehicle(car: StarWarVehicle): Observable <StarWarVehicle>{
  return this.http.get<StarWarVehicle>(car.url + '?format=json');
}

}
