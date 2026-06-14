import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeadingComponent } from '../../../../shared/components/section-heading/section-heading.component';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';

interface Step {
  number: string;
  title: string;
  description: string;
  accent: 'gold' | 'purple' | 'gold-light';
}

const STEPS: Step[] = [
  {
    number: '01',
    title: 'Descarga',
    description: 'Instala Dolarify gratis desde App Store o Google Play en menos de 30 segundos.',
    accent: 'gold',
  },
  {
    number: '02',
    title: 'Elige tus monedas',
    description: 'Selecciona VES, USD, EUR y USDT. Personaliza presets desde ajustes.',
    accent: 'purple',
  },
  {
    number: '03',
    title: 'Convierte y guarda',
    description: 'Calcula al instante, crea presupuestos, comparte cotizaciones.',
    accent: 'gold-light',
  },
];

@Component({
  selector: 'app-how-it-works',
  imports: [SectionHeadingComponent, RevealOnScrollDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section" id="how" aria-labelledby="how-heading">
      <div class="mx-auto max-w-7xl px-6">
        <div appRevealOnScroll>
          <app-section-heading
            eyebrow="Cómo funciona"
            title="Empieza en 3 pasos"
            subtitle="Sin registros raros. Sin tarjetas. Solo tasas y conversión inmediata."
          />
        </div>

        <ol appRevealOnScroll [delay]="100" class="mt-12 grid gap-5 md:grid-cols-3">
          @for (step of steps; track step.number; let i = $index) {
            <li class="glass relative rounded-2xl p-6 md:p-8">
              <div class="mb-4 flex items-center gap-3">
                <span
                  class="font-display text-3xl font-bold"
                  [class.text-gold]="step.accent === 'gold'"
                  [class.text-purple]="step.accent === 'purple'"
                  [class.text-gold-light]="step.accent === 'gold-light'"
                >
                  {{ step.number }}
                </span>
                <div
                  class="h-px flex-1 opacity-30"
                  [class.bg-gold]="step.accent === 'gold'"
                  [class.bg-purple]="step.accent === 'purple'"
                  [class.bg-gold-light]="step.accent === 'gold-light'"
                  aria-hidden="true"
                ></div>
              </div>

              <h3 class="font-display text-xl font-semibold fg">
                {{ step.title }}
              </h3>
              <p class="mt-2 text-sm fg-secondary">
                {{ step.description }}
              </p>
            </li>
          }
        </ol>
      </div>
    </section>
  `,
  styles: [],
})
export class HowItWorksComponent {
  protected readonly steps = STEPS;
}
