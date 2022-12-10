import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingDataComponent } from './booking-data.component';

describe('BookingDataComponent', () => {
  let component: BookingDataComponent;
  let fixture: ComponentFixture<BookingDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
