/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GeneroService } from './genero.service';

describe('GeneroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeneroService]
    });
  });

  it('should ...', inject([GeneroService], (service: GeneroService) => {
    expect(service).toBeTruthy();
  }));
});
