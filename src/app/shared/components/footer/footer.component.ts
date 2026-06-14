import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { supportEmail } from '../../../core/data/legal.data';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="border-t border-glass bg-canvas py-12" role="contentinfo">
      <div class="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-3">
        <div>
          <a routerLink="/" class="inline-flex items-center gap-2" aria-label="Dolarify">
            <img
              src="brand/logo-sin-fondo.png"
              width="32"
              height="32"
              alt=""
              class="h-8 w-auto"
              loading="lazy"
            />
            <span class="font-display text-lg font-bold fg">Dolarify</span>
          </a>
          <p class="mt-3 max-w-xs text-sm fg-secondary">
            Tasas en tiempo real para Venezuela. Convierte entre Bolívares, Dólar, Euro y USDT.
          </p>
        </div>

        <div>
          <h3 class="mb-3 text-xs font-semibold fg uppercase tracking-widest">Producto</h3>
          <ul class="space-y-2 text-sm fg-secondary">
            <li>
              <a routerLink="/download" class="transition-colors hover:fg">Descargar</a>
            </li>
            <li>
              <a href="#features" class="transition-colors hover:fg">Funciones</a>
            </li>
            <li>
              <a href="#faq" class="transition-colors hover:fg">Preguntas frecuentes</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="mb-3 text-xs font-semibold fg uppercase tracking-widest">Legal y soporte</h3>
          <ul class="space-y-2 text-sm fg-secondary">
            <li>
              <a routerLink="/privacy" class="transition-colors hover:fg">Política de privacidad</a>
            </li>
            <li>
              <a routerLink="/terms" class="transition-colors hover:fg">Términos de servicio</a>
            </li>
            <li>
              <a [href]="'mailto:' + email" class="transition-colors hover:fg">Soporte</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="mx-auto mt-10 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-glass px-6 pt-6 text-xs fg-muted md:flex-row">
        <p>© {{ year }} Dolarify. Hecho con cariño para Venezuela.</p>
        <p>
          Fuentes de tasas:
          <span class="text-gold-light">BCV</span> ·
          <span class="text-purple-light">Binance P2P</span>
        </p>
      </div>
    </footer>
  `,
  styles: [],
})
export class FooterComponent {
  protected readonly email = supportEmail;
  protected readonly year = new Date().getFullYear();
}
