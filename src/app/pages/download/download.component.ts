import { ChangeDetectionStrategy, Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { DeviceService } from '../../core/services/device.service';
import { DownloadService } from '../../core/services/download.service';
import { StoreBadgesComponent } from '../../shared/components/store-badges/store-badges.component';

@Component({
  selector: 'app-download',
  imports: [StoreBadgesComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section" aria-labelledby="download-heading">
      <div class="mx-auto flex max-w-2xl flex-col items-center px-6 text-center">
        <img
          src="brand/app-icon.png"
          width="120"
          height="120"
          alt="Icono de Dolarify"
          class="mb-6 h-24 w-24 rounded-2xl shadow-2xl md:h-30 md:w-30"
          style="box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);"
        />

        <h1 id="download-heading" class="font-display text-3xl font-bold tracking-tight fg md:text-5xl">
          Descargar Dolarify
        </h1>

        @if (device.device() === 'other') {
          <p class="mt-4 text-base fg-secondary md:text-lg">
            Elige tu tienda para empezar a convertir.
          </p>
          <div class="mt-8">
            <app-store-badges size="lg" align="center" />
          </div>
        } @else {
          <p class="mt-4 text-base fg-secondary md:text-lg">
            Te estamos llevando a la tienda…
          </p>
          <div class="mt-6 flex items-center gap-2 text-sm fg-muted">
            <span class="bg-gold inline-block h-2 w-2 animate-pulse rounded-full" aria-hidden="true"></span>
            Redirigiendo a {{ device.device() === 'ios' ? 'App Store' : 'Google Play' }}
          </div>
          <div class="mt-8">
            <app-store-badges size="md" align="center" />
          </div>
          <p class="mt-4 text-xs fg-muted">
            ¿No se abrió la tienda? <a [href]="store.getStoreUrl()" class="text-gold-light underline">Toca aquí</a>.
          </p>
        }
      </div>
    </section>
  `,
  styles: [],
})
export class DownloadComponent implements OnInit {
  private readonly platformId = inject(PLATFORM_ID);
  protected readonly device = inject(DeviceService);
  protected readonly store = inject(DownloadService);

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    if (this.device.device() === 'other') return;
    setTimeout(() => this.store.redirectToStore(), 300);
  }
}
