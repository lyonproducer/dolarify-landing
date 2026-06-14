import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideAppInitializer,
  inject,
} from '@angular/core';
import { provideRouter, withInMemoryScrolling, withViewTransitions } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

import { routes } from './app.routes';
import { SeoService } from './core/services/seo.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
        anchorScrolling: 'enabled',
      }),
      withViewTransitions(),
    ),
    provideClientHydration(withEventReplay()),
    provideAppInitializer(() => {
      const seo = inject(SeoService);
      const router = inject(Router);
      const activatedRoute = inject(ActivatedRoute);
      const setFromActivated = (route: ActivatedRoute): void => {
        const data = route.snapshot.data['seo'];
        if (data) {
          seo.apply(data);
        }
      };
      setFromActivated(activatedRoute);
      router.events
        .pipe(
          filter((e): e is NavigationEnd => e instanceof NavigationEnd),
          map(() => activatedRoute),
        )
        .subscribe((route) => {
          while (route.firstChild) route = route.firstChild;
          setFromActivated(route);
        });
    }),
  ],
};
