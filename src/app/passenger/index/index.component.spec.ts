import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerIndexComponent } from './index.component';

describe('IndexComponent', () => {
  let component: PassengerIndexComponent;
  let fixture: ComponentFixture<PassengerIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassengerIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassengerIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
