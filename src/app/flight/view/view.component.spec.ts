import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightViewComponent } from './view.component';

describe('ViewComponent', () => {
  let component: FlightViewComponent;
  let fixture: ComponentFixture<FlightViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
