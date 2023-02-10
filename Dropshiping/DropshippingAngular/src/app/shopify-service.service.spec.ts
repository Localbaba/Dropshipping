import { TestBed } from '@angular/core/testing';

import { ShopifyServiceService } from './shopify-service.service';

describe('ShopifyServiceService', () => {
  let service: ShopifyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopifyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
