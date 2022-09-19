import { TestBed } from '@angular/core/testing';

import { FavoriteRecipeResolver } from './favorite-recipe.resolver';

describe('FavoriteRecipeResolver', () => {
  let resolver: FavoriteRecipeResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(FavoriteRecipeResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
