import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { DeviceService } from './device.service';
import type { Device } from './device.service';

@Injectable({ providedIn: 'root' })
export class DownloadService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly deviceService = inject(DeviceService);

  readonly appStoreUrl = 'https://apps.apple.com/ve/app/dolarify/id6763238329';
  readonly playStoreUrl = 'https://play.google.com/store/apps/details?id=ve.lyonincode.dolarify';

  getStoreUrl(device: Device = this.deviceService.device()): string {
    return device === 'ios' ? this.appStoreUrl : this.playStoreUrl;
  }

  redirectToStore(device: Device = this.deviceService.device()): void {
    if (!isPlatformBrowser(this.platformId)) return;
    window.location.href = this.getStoreUrl(device);
  }
}
