import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { faqItems } from '../../../../core/data/faq.data';
import { SectionHeadingComponent } from '../../../../shared/components/section-heading/section-heading.component';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-faq',
  imports: [SectionHeadingComponent, RevealOnScrollDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section" id="faq" aria-labelledby="faq-heading">
      <div class="mx-auto max-w-3xl px-6">
        <div appRevealOnScroll>
          <app-section-heading
            eyebrow="Preguntas frecuentes"
            title="¿Tienes dudas?"
            subtitle="Las respuestas a las preguntas más comunes sobre Dolarify."
          />
        </div>

        <div appRevealOnScroll [delay]="100" class="mt-12 space-y-3">
          @for (item of items; track item.question; let i = $index) {
            <details
              class="glass rounded-2xl transition-all"
              [class.glass--active]="openIndex() === i"
              (toggle)="onToggle($event, i)"
            >
              <summary
                class="flex cursor-pointer list-none items-center justify-between gap-4 p-5 select-none"
                [attr.aria-expanded]="openIndex() === i"
              >
                <h3 class="font-display text-base font-semibold fg md:text-lg">
                  {{ item.question }}
                </h3>
                <span
                  class="border-glass text-gold-light flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-transform"
                  [class.rotate-45]="openIndex() === i"
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </span>
              </summary>
              <div class="px-5 pb-5 text-sm leading-relaxed fg-secondary md:text-base">
                {{ item.answer }}
              </div>
            </details>
          }
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class FaqComponent {
  protected readonly items = faqItems;
  protected readonly openIndex = signal<number | null>(null);

  protected onToggle(event: Event, index: number): void {
    const details = event.target as HTMLDetailsElement;
    this.openIndex.set(details.open ? index : null);
  }
}
