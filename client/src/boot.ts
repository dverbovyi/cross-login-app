import { NgModuleRef, ReflectiveInjector } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Http, HttpModule, ConnectionBackend, RequestOptions } from '@angular/http';

import { AppModule } from './modules/app';
import { ConfigService } from './common/services/config.service';

import './assets/styles/style.scss';

function RunApplication(): Promise<NgModuleRef<AppModule>> {

  const injector = ReflectiveInjector.resolveAndCreate([ConfigService]),
    service = injector.get(ConfigService);

  return service.load().then((config: any) => {
    return platformBrowserDynamic([{provide: 'APIConfig', useValue: config }]).bootstrapModule(AppModule);
  });
}

RunApplication().catch(err => console.error(err));