import {
  APP_INITIALIZER,
  ApplicationConfig,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

function initializeUserData(httpClient: HttpClient): () => Observable<any> {
  return () =>
    httpClient
      .get('https://jsonplaceholder.typicode.com/users')
      .pipe(tap(console.log));
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeUserData,
      multi: true,
      deps: [HttpClient],
    },
  ],
};
