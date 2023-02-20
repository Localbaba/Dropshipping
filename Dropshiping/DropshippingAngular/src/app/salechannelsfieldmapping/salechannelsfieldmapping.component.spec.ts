import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalechannelsfieldmappingComponent } from './salechannelsfieldmapping.component';

describe('SalechannelsfieldmappingComponent', () => {
  let component: SalechannelsfieldmappingComponent;
  let fixture: ComponentFixture<SalechannelsfieldmappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalechannelsfieldmappingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalechannelsfieldmappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
