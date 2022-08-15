import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightIndexComponent } from './index.component';

describe('FlightIndexComponent', () => {
  let component: FlightIndexComponent;
  let fixture: ComponentFixture<FlightIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
