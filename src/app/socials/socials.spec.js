'use strict';
import { addProviders, inject } from '@angular/core/testing';

import { SocialService } from './social.service';
import { SocialBlocksComponent } from './social-blocks.component';

describe('Socials', () => {

  beforeEach(() => addProviders([
    SocialService,
    SocialBlocksComponent
  ])),

  it('should be able to run tests', () => {
    expect(true).toBe(true);
  })

  it('should return an array', inject([SocialService], (ss) => {
    expect(ss.getSocials().constructor).toBe(Array);
  }));

  it('should populate page', inject([SocialBlocksComponent], (sb) => {
    expect(sb.socials).toBeUndefined();

    sb.ngOnInit();
    expect(sb.socials).toBeDefined();
  }));

});
