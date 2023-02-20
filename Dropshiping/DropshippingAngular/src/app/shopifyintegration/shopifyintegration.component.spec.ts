import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopifyintegrationComponent } from './shopifyintegration.component';

describe('ShopifyintegrationComponent', () => {
  let component: ShopifyintegrationComponent;
  let fixture: ComponentFixture<ShopifyintegrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopifyintegrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopifyintegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
