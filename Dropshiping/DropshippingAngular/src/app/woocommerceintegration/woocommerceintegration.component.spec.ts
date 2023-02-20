import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoocommerceintegrationComponent } from './woocommerceintegration.component';

describe('WoocommerceintegrationComponent', () => {
  let component: WoocommerceintegrationComponent;
  let fixture: ComponentFixture<WoocommerceintegrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WoocommerceintegrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WoocommerceintegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
