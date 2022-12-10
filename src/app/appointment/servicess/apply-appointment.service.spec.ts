import { TestBed } from '@angular/core/testing';

import { ApplyAppointmentService } from './apply-appointment.service';

describe('ApplyAppointmentService', () => {
  let service: ApplyAppointmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplyAppointmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
