import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { DownloadService } from '../../../core/services/download.service';

@Component({
  selector: 'app-store-badges',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div [class]="containerClass()">
      <a
        [href]="download.appStoreUrl"
        target="_blank"
        rel="noopener"
        class="inline-block transition-transform hover:scale-[1.03]"
        aria-label="Descargar Dolarify en App Store"
      >
        <img
          src="store/app-store.png"
          width="180"
          height="60"
          alt="Descargar en App Store"
          loading="lazy"
          decoding="async"
          [class]="badgeClass()"
        />
      </a>
      <a
        [href]="download.playStoreUrl"
        target="_blank"
        rel="noopener"
        class="inline-block transition-transform hover:scale-[1.03]"
        aria-label="Descargar Dolarify en Google Play"
      >
        <img
          src="store/google-play.png"
          width="200"
          height="60"
          alt="Descargar en Google Play"
          loading="lazy"
          decoding="async"
          [class]="badgeClass()"
        />
      </a>
    </div>
  `,
  styles: [],
})
export class StoreBadgesComponent {
  protected readonly download = inject(DownloadService);
  readonly size = input<'sm' | 'md' | 'lg'>('md');
  readonly align = input<'start' | 'center'>('start');

  protected badgeClass(): string {
    const map = {
      sm: 'h-10 w-auto',
      md: 'h-12 w-auto md:h-14',
      lg: 'h-14 w-auto md:h-16',
    };
    return map[this.size()];
  }

  protected containerClass(): string {
    return `flex flex-wrap items-center gap-3 ${this.align() === 'center' ? 'justify-center' : 'justify-start'}`;
  }
}
