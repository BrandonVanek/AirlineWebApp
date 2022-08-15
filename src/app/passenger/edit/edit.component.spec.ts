import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerEditComponent } from './edit.component';

describe('EditComponent', () => {
  let component: PassengerEditComponent;
  let fixture: ComponentFixture<PassengerEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassengerEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassengerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
