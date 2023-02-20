import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadcentreComponent } from './downloadcentre.component';

describe('DownloadcentreComponent', () => {
  let component: DownloadcentreComponent;
  let fixture: ComponentFixture<DownloadcentreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadcentreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadcentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
