import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-glass-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="glass rounded-2xl p-6 md:p-8" [class.glass--active]="active()">
      <ng-content />
    </div>
  `,
  styles: [],
})
export class GlassCardComponent {
  readonly active = input<boolean>(false);
}
