import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestablecerKeyPage } from './restablecer-key.page';

const routes: Routes = [
  {
    path: '',
    component: RestablecerKeyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestablecerKeyPageRoutingModule {}
