/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StarwarsService } from './starwars.service';

describe('Service: Starwars', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StarwarsService]
    });
  });

  it('should ...', inject([StarwarsService], (service: StarwarsService) => {
    expect(service).toBeTruthy();
  }));
});
