import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaDoctoresPage } from './lista-doctores.page';

const routes: Routes = [
  {
    path: '',
    component: ListaDoctoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaDoctoresPageRoutingModule {}
