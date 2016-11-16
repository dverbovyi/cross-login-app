import { enableDebugTools, disableDebugTools } from '@angular/platform-browser';
import { enableProdMode, ApplicationRef } from '@angular/core';

import { DEV, PROD } from './api-configs';

// Environment Providers
let PROVIDERS: any[];

if ('production' === ENV) {
  // Production
  disableDebugTools();
  enableProdMode();

  PROVIDERS = [
   { provide: 'EnvAPIConfig', useValue: PROD }
  ];

} else {

  // Development
  PROVIDERS = [
    { provide: 'EnvAPIConfig', useValue: DEV }
    // custom providers in development
  ];

}

export const ENV_PROVIDERS = [
  ...PROVIDERS
];