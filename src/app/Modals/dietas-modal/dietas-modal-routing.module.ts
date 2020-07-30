import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DietasModalPage } from './dietas-modal.page';

const routes: Routes = [
  {
    path: '',
    component: DietasModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DietasModalPageRoutingModule {}
