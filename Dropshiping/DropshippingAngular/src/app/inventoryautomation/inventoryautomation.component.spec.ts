import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryautomationComponent } from './inventoryautomation.component';

describe('InventoryautomationComponent', () => {
  let component: InventoryautomationComponent;
  let fixture: ComponentFixture<InventoryautomationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryautomationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryautomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
