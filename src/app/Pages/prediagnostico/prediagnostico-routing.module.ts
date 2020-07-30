import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrediagnosticoPage } from './prediagnostico.page';

const routes: Routes = [
  {
    path: '',
    component: PrediagnosticoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrediagnosticoPageRoutingModule {}
