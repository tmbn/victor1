import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndiceMasaPage } from './indice-masa.page';

const routes: Routes = [
  {
    path: '',
    component: IndiceMasaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndiceMasaPageRoutingModule {}
