import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerCreateComponent } from './create.component';

describe('CreateComponent', () => {
  let component: PassengerCreateComponent;
  let fixture: ComponentFixture<PassengerCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassengerCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassengerCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
