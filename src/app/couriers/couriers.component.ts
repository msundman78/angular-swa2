import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-couriers',
  standalone: true,
  imports: [
    RouterLink,
    MatButtonModule
  ],
  template: `
  <h2>Välj ombud för att boka retur</h2>
  <div><button mat-raised-button color="primary" [routerLink]="['/qr']">Postnord</button></div>
  <br />
  <button mat-raised-button color="primary" [routerLink]="['/qr']">DHL</button>
  `,
  styleUrls: ['./couriers.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CouriersComponent { }
