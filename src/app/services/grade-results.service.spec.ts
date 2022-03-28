import { TestBed } from '@angular/core/testing';

import { GradeResultsService } from './grade-results.service';

describe('GradeResultsService', () => {
  let service: GradeResultsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GradeResultsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get data', () => {
    service.getData();
    const fake =  { getData: () => 'demo value' };
    expect(service.getData()).toBe('demo value');
  });

  it('should get data', () => {
    const data = " "
    service.setData(data);
    expect(service.data).toEqual(" ");
  });

  it('should get data', () => {
    const data = "set values"
    service.setData(data);
    expect(service.data).toEqual("set values");
  });
});
