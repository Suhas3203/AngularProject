import { TestBed } from '@angular/core/testing';

import { SignInProcessService } from './sign-in-process.service';

describe('SignInProcessService', () => {
  let service: SignInProcessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignInProcessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
