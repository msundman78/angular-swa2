import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-weight',
  standalone: true,
  imports: [
    RouterLink,
    MatButton,
  ],
  template: `
  <h2>Ange maxvikt</h2>
  <button mat-raised-button color="primary" [routerLink]="['/qr']">3 kg</button>
  <button mat-raised-button color="primary" [routerLink]="['/qr']">5 kg</button>
  <button mat-raised-button color="primary" [routerLink]="['/qr']">10 kg</button>
  <button mat-raised-button color="primary" [routerLink]="['/couriers']">Stäng</button>
  `,
  styleUrl: './weight.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeightComponent { }
