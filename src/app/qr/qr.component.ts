import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
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
  <h2> Visa denna QR-kod hos paketombudet</h2>
  <div class="rectangle">
    <h2>{{ courierName }} - {{ weight }} kg</h2>
    <qrcode [qrdata]="'Your data string'" [width]="256" [errorCorrectionLevel]="'M'" [routerLink]="['/couriers']"></qrcode>
  </div>
  <hr />
  <button mat-raised-button color="primary" [routerLink]="['/weight', courier]">Ändra vikt</button>
  <button mat-raised-button color="warn" [routerLink]="['/couriers']">Stäng</button>
  `,
  styleUrls: ['./qr.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QrComponent implements OnInit{
  courier: string | null = null;
  weight: string | null = null;
  courierName: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.courier = params.get('courier');
      if (this.courier == 'postnord') {
        this.courierName = 'Postnord';
      } else if (this.courier == 'dhl') {
        this.courierName = 'DHL';
      } else {
        this.router.navigate(['/couriers']);
      }
      // You can use the `courier` value here as needed
    });

    this.route.queryParamMap.subscribe(queryParams => {
      this.weight = queryParams.get('weight');
      // You can use the `weight` value here as needed
    });
  }
}
