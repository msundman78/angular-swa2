import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-qr',
  standalone: true,
  imports: [],
  template: `
  <p>qr works!</p>
  `,
  styleUrls: ['./qr.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QrComponent { }
