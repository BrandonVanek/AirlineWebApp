import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingViewComponent } from './view.component';

describe('ViewComponent', () => {
  let component: BookingViewComponent;
  let fixture: ComponentFixture<BookingViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
