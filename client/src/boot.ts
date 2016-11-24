import { NgModuleRef, ReflectiveInjector } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Http, HttpModule, ConnectionBackend, RequestOptions } from '@angular/http';

import { AppModule } from './modules/app';
import { ConfigService } from './common/services/config.service';

import './assets/styles/style.scss';

function RunApplication(): void {

  const injector = ReflectiveInjector.resolveAndCreate([ConfigService]),
    service = injector.get(ConfigService);

  service.load()
    .then((config: any) => {
      platformBrowserDynamic([{ provide: 'APIConfig', useValue: config }]).bootstrapModule(AppModule);
    })
    .catch(console.error);
}

RunApplication();