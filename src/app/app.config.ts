import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './navbar/navbar.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
