import { ChangeDetectionStrategy, Component, ElementRef, PLATFORM_ID, inject, viewChild, AfterViewInit, OnDestroy, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { iosShowcase } from '../../../../core/data/showcase.data';
import { SectionHeadingComponent } from '../../../../shared/components/section-heading/section-heading.component';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-showcase',
  imports: [SectionHeadingComponent, RevealOnScrollDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section overflow-hidden" id="showcase" aria-labelledby="showcase-heading">
      <div class="mx-auto max-w-7xl px-6">
        <div appRevealOnScroll>
          <app-section-heading
            eyebrow="Recorrido visual"
            title="Así se ve Dolarify"
            subtitle="Tasas, calculadora, presupuestos y comparaciones. Una experiencia cuidada al detalle."
          />
        </div>
      </div>

      <div appRevealOnScroll [delay]="100" class="mt-12">
        <div
          #carousel
          class="snap-x-scroll flex gap-6 overflow-x-auto px-6 pb-6"
          tabindex="0"
          aria-label="Carrusel de capturas de pantalla"
        >
          @for (slide of slides; track slide.image; let i = $index) {
            <article
              class="w-[240px] shrink-0 md:w-[280px]"
              [attr.aria-roledescription]="'slide'"
              [attr.aria-label]="(i + 1) + ' de ' + slides.length + ': ' + slide.title"
            >
              <div class="glass overflow-hidden rounded-2xl p-3">
                <img
                  [src]="slide.image"
                  [alt]="slide.title + ' — captura de pantalla'"
                  width="600"
                  height="1066"
                  class="h-auto w-full rounded-xl"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div class="mt-3 px-1">
                <div class="flex items-center justify-between gap-2">
                  <h3 class="font-display text-base font-semibold fg">
                    {{ slide.title }}
                  </h3>
                  @if (slide.version) {
                    <span class="shrink-0 rounded-full border border-glass px-2 py-0.5 text-[10px] font-medium fg-muted">
                      {{ slide.version }}
                    </span>
                  }
                </div>
                <p class="mt-1 text-xs fg-secondary">
                  {{ slide.caption }}
                </p>
              </div>
            </article>
          }
        </div>

        <div class="mx-auto mt-6 flex max-w-7xl justify-center gap-2 px-6" role="tablist" aria-label="Indicadores del carrusel">
          @for (slide of slides; track slide.image; let i = $index) {
            <button
              type="button"
              role="tab"
              [attr.aria-selected]="activeIndex() === i"
              [attr.aria-label]="'Ir a la captura ' + (i + 1)"
              class="h-1.5 rounded-full transition-all"
              [class.w-8]="activeIndex() === i"
              [class.w-1.5]="activeIndex() !== i"
              [class.bg-gold]="activeIndex() === i"
              [class.bg-surface-hover]="activeIndex() !== i"
              (click)="scrollTo(i)"
            ></button>
          }
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class ShowcaseComponent implements AfterViewInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  protected readonly slides = iosShowcase;
  protected readonly activeIndex = signal(0);
  private readonly carouselRef = viewChild<ElementRef<HTMLDivElement>>('carousel');
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const carousel = this.carouselRef()?.nativeElement;
    if (!carousel) return;

    this.observer = new IntersectionObserver(
      () => {
        const scrollLeft = carousel.scrollLeft;
        const slideWidth = carousel.scrollWidth / this.slides.length;
        const idx = Math.round(scrollLeft / slideWidth);
        this.activeIndex.set(Math.max(0, Math.min(idx, this.slides.length - 1)));
      },
      { root: carousel, threshold: 0.5 },
    );

    Array.from(carousel.children).forEach((child) => {
      this.observer!.observe(child);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  protected scrollTo(index: number): void {
    const carousel = this.carouselRef()?.nativeElement;
    if (!carousel) return;
    const slideWidth = carousel.scrollWidth / this.slides.length;
    carousel.scrollTo({ left: slideWidth * index, behavior: 'smooth' });
  }
}
