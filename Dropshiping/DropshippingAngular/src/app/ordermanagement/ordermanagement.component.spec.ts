import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdermanagementComponent } from './ordermanagement.component';

describe('OrdermanagementComponent', () => {
  let component: OrdermanagementComponent;
  let fixture: ComponentFixture<OrdermanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdermanagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdermanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
