import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesChannelComponent } from './sales-channel.component';

describe('SalesChannelComponent', () => {
  let component: SalesChannelComponent;
  let fixture: ComponentFixture<SalesChannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesChannelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
