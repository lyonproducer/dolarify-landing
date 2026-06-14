import { ChangeDetectionStrategy, Component, HostListener, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, ThemeToggleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="fixed top-0 right-0 left-0 z-50 px-4 pt-4 md:px-6">
      <nav
        class="glass mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-2.5 md:px-6 md:py-3"
        aria-label="Navegación principal"
      >
        <a
          routerLink="/"
          class="flex items-center gap-2 transition-opacity hover:opacity-80"
          aria-label="Dolarify — Inicio"
        >
          <img
            src="brand/logo-sin-fondo.png"
            width="32"
            height="32"
            alt=""
            class="h-8 w-auto"
            loading="eager"
            decoding="async"
          />
          <span class="font-display text-lg font-bold fg md:text-xl">
            Dolarify
          </span>
        </a>

        <div class="hidden items-center gap-6 md:flex">
          <a href="#features" class="text-sm fg-secondary transition-colors hover:fg">Funciones</a>
          <a href="#how" class="text-sm fg-secondary transition-colors hover:fg">Cómo funciona</a>
          <a href="#faq" class="text-sm fg-secondary transition-colors hover:fg">FAQ</a>
        </div>

        <div class="flex items-center gap-2">
          <app-theme-toggle />
          <a
            routerLink="/download"
            class="bg-purple glow-purple hidden cursor-pointer items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white transition-all hover:scale-105 md:inline-flex"
          >
            Descargar
          </a>
        </div>
      </nav>
    </header>
  `,
  styles: [],
})
export class NavbarComponent {
  private readonly platformId = inject(PLATFORM_ID);
  protected readonly scrolled = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.scrolled.set(window.scrollY > 24);
  }
}
