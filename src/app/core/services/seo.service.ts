import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface SeoMeta {
  title: string;
  description: string;
  path?: string;
  imagePath?: string;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);
  private readonly siteUrl = 'https://dolarify.app';
  private readonly siteName = 'Dolarify';

  apply(seo: SeoMeta): void {
    const url = `${this.siteUrl}${seo.path ?? '/'}`;
    const image = `${this.siteUrl}${seo.imagePath ?? '/og-image.png'}`;

    this.title.setTitle(seo.title);
    this.updateName('description', seo.description);
    this.updateProperty('og:title', seo.title);
    this.updateProperty('og:description', seo.description);
    this.updateProperty('og:url', url);
    this.updateProperty('og:image', image);
    this.updateProperty('og:site_name', this.siteName);
    this.updateProperty('og:locale', 'es_VE');
    this.updateName('twitter:card', 'summary_large_image');
    this.updateName('twitter:title', seo.title);
    this.updateName('twitter:description', seo.description);
    this.updateName('twitter:image', image);
    this.updateProperty('og:image:width', '1200');
    this.updateProperty('og:image:height', '630');
  }

  private updateName(name: string, content: string): void {
    this.meta.updateTag({ name, content });
  }

  private updateProperty(property: string, content: string): void {
    this.meta.updateTag({ property, content });
  }
}
