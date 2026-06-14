import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroComponent } from './sections/hero/hero.component';
import { LiveRatesComponent } from './sections/live-rates/live-rates.component';
import { FeaturesBentoComponent } from './sections/features-bento/features-bento.component';
import { HowItWorksComponent } from './sections/how-it-works/how-it-works.component';
import { ShowcaseComponent } from './sections/showcase/showcase.component';
import { ShowcaseAndroidComponent } from './sections/showcase-android/showcase-android.component';
import { FaqComponent } from './sections/faq/faq.component';
import { CtaFinalComponent } from './sections/cta-final/cta-final.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    LiveRatesComponent,
    FeaturesBentoComponent,
    HowItWorksComponent,
    ShowcaseComponent,
    ShowcaseAndroidComponent,
    FaqComponent,
    CtaFinalComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-hero />
    <app-live-rates />
    <app-features-bento />
    <app-how-it-works />
    <app-showcase />
    <app-showcase-android />
    <app-faq />
    <app-cta-final />
  `,
  styles: [],
})
export class HomeComponent {}
