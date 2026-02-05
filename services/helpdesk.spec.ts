import { TestBed } from '@angular/core/testing';

import { Helpdesk } from './helpdesk';

describe('Helpdesk', () => {
  let service: Helpdesk;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Helpdesk);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
