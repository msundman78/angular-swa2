import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-weight',
  standalone: true,
  imports: [
    RouterLink,
    MatButtonModule,
  ],
  template: `

  <h2>Ange maxvikt</h2>
  <div class="rectangle">
    <h1>{{ courierName }}</h1>
    <button mat-raised-button color="primary" [routerLink]="['/qr', courier]" [queryParams]="{ weight: '3' }">3 kg</button>
    <button mat-raised-button color="primary" [routerLink]="['/qr', courier]" [queryParams]="{ weight: '5' }">5 kg</button>
    <button mat-raised-button color="primary" [routerLink]="['/qr', courier]" [queryParams]="{ weight: '10' }">10 kg</button>
  </div>
  <hr />
  <button mat-raised-button color="warn" [routerLink]="['/couriers']">Stäng</button>
  `,
  styleUrl: './weight.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeightComponent implements OnInit {
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
  }
 }
