import { ChangeDetectionStrategy, Component } from '@angular/core';
import { androidShowcase } from '../../../../core/data/showcase.data';
import { SectionHeadingComponent } from '../../../../shared/components/section-heading/section-heading.component';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-showcase-android',
  imports: [SectionHeadingComponent, RevealOnScrollDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section" id="android" aria-labelledby="android-heading">
      <div class="mx-auto max-w-7xl px-6">
        <div appRevealOnScroll>
          <app-section-heading
            eyebrow="También en Android"
            title="Disponible en iOS y Android"
            subtitle="La misma experiencia premium en ambas plataformas."
          />
        </div>

        <div
          appRevealOnScroll
          [delay]="100"
          class="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5"
        >
          @for (slide of slides; track slide.image) {
            <figure class="glass overflow-hidden rounded-2xl p-3">
              <img
                [src]="slide.image"
                [alt]="slide.title + ' — vista en Android'"
                width="400"
                height="889"
                class="h-auto w-full rounded-xl"
                loading="lazy"
                decoding="async"
              />
              <figcaption class="mt-3 text-center text-xs fg-secondary">
                {{ slide.title }}
              </figcaption>
            </figure>
          }
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class ShowcaseAndroidComponent {
  protected readonly slides = androidShowcase;
}
