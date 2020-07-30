import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TuDoctorPageRoutingModule } from './tu-doctor-routing.module';

import { TuDoctorPage } from './tu-doctor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TuDoctorPageRoutingModule
  ],
  declarations: [TuDoctorPage]
})
export class TuDoctorPageModule {}
