import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerViewComponent } from './view.component';

describe('ViewComponent', () => {
  let component: PassengerViewComponent;
  let fixture: ComponentFixture<PassengerViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassengerViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassengerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
