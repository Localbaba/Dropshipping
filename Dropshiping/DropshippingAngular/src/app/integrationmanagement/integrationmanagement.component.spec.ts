import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationmanagementComponent } from './integrationmanagement.component';

describe('IntegrationmanagementComponent', () => {
  let component: IntegrationmanagementComponent;
  let fixture: ComponentFixture<IntegrationmanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntegrationmanagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntegrationmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
