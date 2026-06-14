import { Injectable, signal, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Device = 'ios' | 'android' | 'other';

@Injectable({ providedIn: 'root' })
export class DeviceService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly _device = signal<Device>(this.detect());
  readonly device = this._device.asReadonly();

  private detect(): Device {
    if (!isPlatformBrowser(this.platformId)) return 'other';
    const ua = navigator.userAgent;
    if (/iPad|iPhone|iPod/.test(ua)) return 'ios';
    if (ua.includes('Mac') && navigator.maxTouchPoints > 1) return 'ios';
    if (/Android/i.test(ua)) return 'android';
    return 'other';
  }
}
