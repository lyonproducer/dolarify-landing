import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="mb-12 max-w-3xl" [class.mx-auto]="centered()" [class.text-center]="centered()">
      @if (eyebrow()) {
        <span class="mb-3 inline-block rounded-full border border-glass bg-glass px-3 py-1 text-xs font-semibold tracking-widest text-gold-light uppercase">
          {{ eyebrow() }}
        </span>
      }
      <h2 class="font-display text-4xl font-bold tracking-tight fg md:text-5xl lg:text-6xl">
        {{ title() }}
      </h2>
      @if (subtitle()) {
        <p class="mt-4 text-base fg-secondary md:mt-5 md:text-lg">
          {{ subtitle() }}
        </p>
      }
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `],
})
export class SectionHeadingComponent {
  readonly eyebrow = input<string>('');
  readonly title = input.required<string>();
  readonly subtitle = input<string>('');
  readonly centered = input<boolean>(false);
}
