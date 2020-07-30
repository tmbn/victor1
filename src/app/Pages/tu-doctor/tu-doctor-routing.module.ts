import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TuDoctorPage } from './tu-doctor.page';

const routes: Routes = [
  {
    path: '',
    component: TuDoctorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TuDoctorPageRoutingModule {}
