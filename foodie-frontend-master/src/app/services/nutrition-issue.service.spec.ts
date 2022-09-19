import { TestBed } from '@angular/core/testing';

import { NutritionIssueService } from './nutrition-issue.service';

describe('NutritionIssueService', () => {
  let service: NutritionIssueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NutritionIssueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
