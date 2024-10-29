import {
  APP_INITIALIZER,
  ApplicationConfig,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { UserDataService } from './user-data.service';
import { User } from './model';

function initializeUserData(
  httpClient: HttpClient,
  userDataService: UserDataService
): () => Observable<any> {
  return () =>
    httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users').pipe(
      tap((data) => {
        userDataService.userData = data;
      })
    );
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
      deps: [HttpClient, UserDataService],
    },
    provideAnimationsAsync(),
  ],
};
