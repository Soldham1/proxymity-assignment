import {
  APP_INITIALIZER,
  ApplicationConfig,
  provideZoneChangeDetection,
  Provider,
  importProvidersFrom,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  HttpClient,
  provideHttpClient,
  HTTP_INTERCEPTORS,
  HttpClientModule,
} from '@angular/common/http';
import { catchError, Observable, tap } from 'rxjs';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { UserDataService } from './user-data.service';
import { User } from './model';
import { AuthInterceptorService } from './interceptors/author-interceptor.service';

function initializeUserData(
  httpClient: HttpClient,
  userDataService: UserDataService
): () => Observable<User[]> {
  return () =>
    httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users').pipe(
      catchError((error) => {
        console.error(error);
        return [];
      }),
      tap((data) => {
        userDataService.userData = data;
      })
    );
}

const authorInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptorService,
  multi: true,
};

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(HttpClientModule),
    authorInterceptorProvider,
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
