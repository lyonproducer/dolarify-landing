import {
  Directive,
  ElementRef,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  inject,
  input,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appRevealOnScroll]',
  host: {
    '[style.opacity]': 'visible() ? "1" : "0"',
    '[style.transform]': 'visible() ? "translateY(0)" : "translateY(24px)"',
    '[style.transition]': '"opacity 700ms ease-out, transform 700ms ease-out"',
  },
})
export class RevealOnScrollDirective implements OnInit, OnDestroy {
  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly platformId = inject(PLATFORM_ID);
  private observer?: IntersectionObserver;

  readonly threshold = input<number>(0.1);
  readonly once = input<boolean>(true);
  readonly delay = input<number>(0);

  protected readonly visible = signal(false);

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      this.visible.set(true);
      return;
    }
    const el = this.el.nativeElement;
    el.style.transitionDelay = `${this.delay()}ms`;

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      this.visible.set(true);
      if (this.once()) return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.visible.set(true);
            if (this.once()) this.observer?.disconnect();
          } else if (!this.once()) {
            this.visible.set(false);
          }
        }
      },
      { threshold: this.threshold() },
    );
    this.observer.observe(el);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
