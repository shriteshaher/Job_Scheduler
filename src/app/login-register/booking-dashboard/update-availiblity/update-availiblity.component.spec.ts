import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAvailiblityComponent } from './update-availiblity.component';

describe('UpdateAvailiblityComponent', () => {
  let component: UpdateAvailiblityComponent;
  let fixture: ComponentFixture<UpdateAvailiblityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAvailiblityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAvailiblityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
