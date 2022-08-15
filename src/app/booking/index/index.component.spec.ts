import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingIndexComponent } from './index.component';

describe('IndexComponent', () => {
  let component: BookingIndexComponent;
  let fixture: ComponentFixture<BookingIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
