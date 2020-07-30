import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PesoIdealPage } from './peso-ideal.page';

const routes: Routes = [
  {
    path: '',
    component: PesoIdealPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PesoIdealPageRoutingModule {}
