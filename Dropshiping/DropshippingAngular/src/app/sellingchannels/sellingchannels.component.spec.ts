import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellingchannelsComponent } from './sellingchannels.component';

describe('SellingchannelsComponent', () => {
  let component: SellingchannelsComponent;
  let fixture: ComponentFixture<SellingchannelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellingchannelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellingchannelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
