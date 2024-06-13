import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { QRCodeModule } from 'angularx-qrcode';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-qr',
  standalone: true,
  imports: [
    RouterLink,
    MatButtonModule,
    QRCodeModule
  ],
  template: `
  <h2>Postnord</h2>
  <qrcode [qrdata]="'Your data string'" [width]="256" [errorCorrectionLevel]="'M'"></qrcode>
  <h2>5 kg</h2>
  <button mat-raised-button color="primary" [routerLink]="['/couriers']">Stäng</button>
  `,
  styleUrls: ['./qr.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QrComponent { }
