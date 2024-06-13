import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QrComponent } from './qr/qr.component';
import { CouriersComponent } from './couriers/couriers.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'qr', component: QrComponent },
  { path: 'couriers', component: CouriersComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
