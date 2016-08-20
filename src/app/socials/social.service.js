'use strict';

import { Injectable } from '@angular/core'

import { socials } from './socials'

@Injectable()
class SocialService {
  constructor () {}

  getSocials() {
    return socials;
  }
}

export { SocialService };
