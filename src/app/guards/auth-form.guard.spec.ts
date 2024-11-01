import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { authFormGuard } from './auth-form.guard';

describe('authFormGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authFormGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
