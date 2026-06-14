import { Injectable, signal, effect, computed, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'dark' | 'light';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly storageKey = 'dolarify-theme';
  private readonly _theme = signal<Theme>(this.detectInitial());
  readonly theme = this._theme.asReadonly();
  readonly isDark = computed(() => this._theme() === 'dark');

  constructor() {
    effect(() => {
      const theme = this._theme();
      if (!isPlatformBrowser(this.platformId)) return;
      document.documentElement.classList.toggle('light', theme === 'light');
      localStorage.setItem(this.storageKey, theme);
    });
  }

  toggle(): void {
    this._theme.update((t) => (t === 'dark' ? 'light' : 'dark'));
  }

  set(theme: Theme): void {
    this._theme.set(theme);
  }

  private detectInitial(): Theme {
    if (!isPlatformBrowser(this.platformId)) return 'dark';
    const saved = localStorage.getItem(this.storageKey) as Theme | null;
    if (saved === 'dark' || saved === 'light') return saved;
    return 'dark';
  }
}
