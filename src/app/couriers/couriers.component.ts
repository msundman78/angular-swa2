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
  <button mat-raised-button color="primary" [routerLink]="['/weight/postnord']">Postnord</button>
  <button mat-raised-button color="primary" [routerLink]="['/weight/dhl']">DHL</button>
  `,
  styleUrls: ['./couriers.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CouriersComponent {}
